import { Modal, pxToRem, Button } from "@kisskissbankbank/kitten";
import { EditorState, Modifier, RichUtils } from "draft-js";
import { Formik } from "formik";
import linkifyIt from "linkify-it";
import isEmtpy from "lodash/fp/isEmpty";
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
  getImageUrl,
  hasEntityFocus,
} from "../utils";
import LinkInline from "./link-inline";

const linkify = linkifyIt();
linkify.tlds(tlds);

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${pxToRem(200)};
    max-width: 100%;
  }
`;

const ImageLinked = ({ src }) => {
  return (
    <ImageWrapper>
      <img src={getImageUrl(src)} alt="" />
    </ImageWrapper>
  );
};

const Link = ({ contentState, entityKey, children }) => {
  const [isVisible, setVisible] = useState(false);
  const { url } = contentState.getEntity(entityKey).getData();
  const [{ editorState, focus }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0);
  }, [focus, editorState]);
  return (
    <Wrapper aria-live="assertive">
      <a
        href={url}
        target="_blank"
        className="k-u-link k-u-link-primary1"
        rel="nofollow noopener"
      >
        {children}
      </a>
      {isVisible && (
        <LinkInline
          url={url}
          onDelete={() => {
            const currentContent = contentState?.getBlockForKey(
              editorState?.getSelection()?.getFocusKey()
            );
            if (!currentContent) return;
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
    </Wrapper>
  );
};

const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

export const decorator = {
  strategy: linkStrategy,
  component: Link,
};

export const readDecorator = {
  strategy: linkStrategy,
  component: (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener"
        className="k-u-link k-u-link-primary1"
      >
        {props.children}
      </a>
    );
  },
};

const LinkControls = ({ disabled, onChange }) => {
  const [modalOpened, openModal] = useState(false);
  const [
    { editorState, editorRef, translations, disabled: contextDisabled },
    dispatch,
  ] = useContext(EditorContext);
  const entity = getEntity(editorState);
  const entityKey = getEntityKey(editorState);
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState);
    }
    return getEntityText(editorState, entityKey);
  };
  const forceFocus = () => {
    const currentSelection = editorState.getSelection();
    setTimeout(() => editorRef.current.focus(), 0);
    const newSelectionAtTheEnd = currentSelection.merge({
      anchorOffset: currentSelection.getFocusOffset(),
      hasFocus: true,
    });
    dispatch(
      updateEditor(
        EditorState.forceSelection(editorState, newSelectionAtTheEnd)
      )
    );
  };
  const active =
    !contextDisabled && !disabled && (entity || !isEmtpy(textToShow()));
  return (
    <>
      <ButtonEditor
        icon="link"
        disabled={!active}
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
          forceFocus();
        }}
        isOpen={modalOpened}
      >
        {({ close }) => {
          return (
            <>
              <Modal.Title>{translations.link.title}</Modal.Title>
              <Formik
                enableReinitialize
                initialValues={{
                  url: entity ? entity.getData().url : "",
                  text: textToShow(),
                }}
                onSubmit={({ url }) => {
                  const link = linkify.match(url);
                  const contentState = editorState.getCurrentContent();
                  onChange();
                  if (entity) {
                    if (entity?.get("type") === "IMAGE") {
                      const newImageContentState = contentState.mergeEntityData(
                        entityKey,
                        { url: link[0].url }
                      );
                      dispatch(
                        updateEditor(
                          EditorState.push(
                            editorState,
                            newImageContentState,
                            "change-block-data"
                          )
                        )
                      );
                    } else {
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
                    }
                  } else {
                    const contentStateWithEntity = contentState.createEntity(
                      "LINK",
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
                  openModal(false);
                  setTimeout(() => editorRef.current.focus(), 0);
                }}
              >
                {({ handleSubmit }) => {
                  return (
                    <form>
                    <Modal.Content align="left">
                      <div>
                          {entity?.get("type") === "IMAGE" ? (
                            <ImageLinked src={entity?.getData()?.src} />
                          ) : (
                            <>
                              <Label htmlFor="text">
                                {translations.link.text.label}
                              </Label>
                              <InputText name="text" disabled />
                            </>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="url">
                            {translations.image_upload.url}
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
                            size="large"
                            type="submit"
                            modifier="helium"
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

LinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

LinkControls.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default LinkControls;
