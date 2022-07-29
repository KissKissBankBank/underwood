import { Button, Modal } from "@kisskissbankbank/kitten";
import { EditorState, Modifier, RichUtils } from "draft-js";
import { Formik } from "formik";
import linkifyIt from "linkify-it";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import tlds from "tlds";
import ButtonEditor from "../components/button";
import { InputText, Label } from "../components/form";
import { EditorContext, updateEditor } from "../context";
import {
  getCurrentSelection,
  getEntity,
  getEntityKey,
  getEntityText,
  hasEntityFocus,
} from "../utils";
import LinkInline from "./link-inline";

const linkify = linkifyIt();
linkify.tlds(tlds);

const StyledButtonLink = ({ href, children }) => {
  return (
    <Button
      tag="a"
      href={href}
      target="_blank"
      rel="nofollow noopener"
      modifier="helium"
      size="large"
      fit="content"
      mobileFit="fluid"
    >
      {children}
    </Button>
  );
};

const ButtonLink = ({ contentState, entityKey, children }) => {
  const [isVisible, setVisible] = useState(false);
  const { url } = contentState.getEntity(entityKey).getData();
  const [{ editorState, focus, translations }, dispatch] =
    useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);

  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0);
  }, [focus, editorState]);

  return (
    <div className="u-Draft__link_button">
      <StyledButtonLink href={url}>{children}</StyledButtonLink>

      {isVisible && (
        <LinkInline
          url={url}
          onDelete={() => {
            const currentContent = contentState.getBlockForKey(
              editorState.getSelection().getFocusKey()
            );
            currentContent.findEntityRanges(
              (character) => {
                return character.getEntity() === entityKey;
              },
              (start, end) => {
                const newsSelection = editorState.getSelection().merge({
                  focusOffset: end,
                  anchorOffset: start,
                });
                const newsEditorState = Modifier.applyEntity(
                  contentState,
                  newsSelection,
                  null
                );
                dispatch(
                  updateEditor(
                    EditorState.push(
                      editorState,
                      newsEditorState,
                      "apply-entity"
                    )
                  )
                );
              }
            );
          }}
        />
      )}
    </div>
  );
};

const buttonLinkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "BUTTON_LINK"
    );
  }, callback);
};

export const decorator = {
  strategy: buttonLinkStrategy,
  component: ButtonLink,
};

export const readDecorator = {
  strategy: buttonLinkStrategy,
  component: (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
      <div className="u-Draft__link_button">
        <StyledButtonLink href={url}>{props.children}</StyledButtonLink>
      </div>
    );
  },
};

const ButtonLinkControls = ({ disabled, onChange }) => {
  const [modalOpened, openModal] = useState(false);
  const [{ editorState, editorRef, translations }, dispatch] =
    useContext(EditorContext);
  const entity = getEntity(editorState);
  const entityKey = getEntityKey(editorState);
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState);
    }
    return getEntityText(editorState, entityKey);
  };

  return (
    <>
      <ButtonEditor
        icon="button_link"
        className="Editor__toolbar__button--large"
        disabled={disabled}
        onToggle={() => {
          if (modalOpened) {
            openModal(false);
          } else {
            openModal(true);
          }
        }}
      />

      <Modal
        onClose={() => {
          openModal(false);
        }}
        isOpen={modalOpened}
        zIndex={1000}
      >
        {({ close }) => {
          return (
            <>
              <Modal.Title>{translations.button_link.title}</Modal.Title>

              <Formik
                enableReinitialize
                initialValues={{
                  url: entity ? entity.getData().url : "",
                  text: textToShow(),
                }}
                onSubmit={({ url }) => {
                  onChange(url);
                  const link = linkify.match(url);
                  const contentState = editorState.getCurrentContent();
                  if (entity) {
                    const newContentState = contentState.replaceEntityData(
                      entityKey,
                      { url: link[0].url }
                    );
                    dispatch(
                      updateEditor(
                        EditorState.push(
                          editorState,
                          newContentState,
                          "change-block-data"
                        )
                      )
                    );
                  } else {
                    const contentStateWithEntity = contentState.createEntity(
                      "BUTTON_LINK",
                      "MUTABLE",
                      { url: link[0].url }
                    );
                    const entityKey =
                      contentStateWithEntity.getLastCreatedEntityKey();
                    const newEditorState = EditorState.set(editorState, {
                      currentContent: contentStateWithEntity,
                    });

                    dispatch(
                      updateEditor(
                        RichUtils.toggleLink(
                          newEditorState,
                          newEditorState.getSelection(),
                          entityKey
                        )
                      )
                    );
                  }
                  close();
                  setTimeout(() => editorRef.current.blur(), 0);
                }}
              >
                {({ handleSubmit }) => {
                  return (
                    <form>
                      <Modal.Content align="left">
                        <div>
                          <Label htmlFor="">
                            {translations.button_link.text}
                          </Label>
                          <InputText name="text" disabled />
                        </div>

                        <div>
                          <Label htmlFor="url">
                            {translations.button_link.url}
                          </Label>
                          <InputText
                            name="url"
                            validate={(value) => {
                              if (!linkify.test(value)) {
                                return translations.link.error;
                              }
                            }}
                          />
                        </div>

                        <Modal.Actions>
                          <Button
                            modifier="helium"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            {translations.submit}
                          </Button>
                        </Modal.Actions>
                      </Modal.Content>
                    </form>
                  );
                }}
              </Formik>
            </>
          );
        }}
      </Modal>
    </>
  );
};

ButtonLinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

ButtonLinkControls.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default ButtonLinkControls;
