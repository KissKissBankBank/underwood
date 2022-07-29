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

const LinkModal = ({ onClose, isOpen, onChange }) => {
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

  return (
    <Modal zIndex={1000} onClose={onClose} isOpen={isOpen}>
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
                setTimeout(() => editorRef.current.focus(), 0);
              }}
            >
              {({ handleSubmit }) => {
                return (
                  <form>
                    <Modal.Content align="left">
                      <div>
                        {entity?.get("type") === "IMAGE" ? (
                          <div className="u-Draft__image_wrapper">
                            <img src={getImageUrl(entity?.getData()?.src)} alt="" />
                          </div>
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
  );
};

LinkModal.propTypes = {
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

LinkModal.defaultProps = {
  onChange: () => null,
  onClose: () => null,
  isOpen: false,
};

export default LinkModal;
