import {
  DropdownMenu,
  Modal } from "@kisskissbankbank/kitten";
import classNames from "classnames";
import { AtomicBlockUtils, EditorState } from "draft-js";
import { Formik } from "formik";
import isEmpty from "lodash/fp/isEmpty";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import ButtonEditor from "../../components/button";
import { EditorContext, updateEditor } from "../../context";
import {
  getImageUrl,
  hasEntityFocus,
  isPreviousEmptyBlock,
  moveSelectionTo,
  removeDataFromEntity,
  removePreviousEmptyBlock,
} from "../../utils";
import LinkInline from "../link-inline";
import Form from "./form";
import Update from "./update";

const StyledImage = styled.div`
  position: relative;
  width: 100%;

  img {
    display: inline;
    height: auto;
    max-width: 100%;
  }

  .image-menu {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
  }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
  &[open]::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary-500);
    opacity: .2;
  }
`

const LinkManager = ({ url, entityKey }) => {
  const [{ editorState }, dispatch] = useContext(EditorContext);
  return (
    <LinkInline
      url={url}
      onDelete={() => {
        dispatch(
          updateEditor(removeDataFromEntity(editorState, entityKey, ["url"]))
        );
      }}
    />
  );
};

const ImageEditor = ({ contentState, entityKey, blockKey }) => {
  const [{ editorState, translations }, dispatch] = useContext(EditorContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const hasFocus = hasEntityFocus(
    editorState.getCurrentContent(),
    editorState,
    entityKey
  );
  const { src, url, description } = contentState.getEntity(entityKey).getData();
  const onClick = () => {
    setTimeout(
      () => dispatch(updateEditor(moveSelectionTo(editorState, blockKey))),
      1
    );
  };
  return (
    <StyledImage className="kiss-Draft__image" onClick={onClick}>
      <div
        className={classNames("kiss-Draft__image-focus", {
          "kiss-Draft__image-focus__focused": hasFocus,
        })}
      >
        <div className="k-u-align-center">
          <img src={getImageUrl(src)} alt={description} />
          <StyledDropdownMenu
            className="image-menu"
            menuPosition="center"
            positionedButton
          >
            <DropdownMenu.Button onClick={() => setShowUpdateModal(true)}>
              {isEmpty(description)
                ? translations.image_upload.add_label
                : translations.image_upload.modify_label}
            </DropdownMenu.Button>
          </StyledDropdownMenu>
        </div>
        {hasFocus && !!url && <LinkManager url={url} entityKey={entityKey} />}
      </div>
      {showUpdateModal && (
        <Update
          onClose={() => setShowUpdateModal(false)}
          entityKey={entityKey}
          description={description}
        />
      )}
    </StyledImage>
  );
};

const ImageDisplayer = ({ contentState, entityKey }) => {
  const { src, url, description } = contentState.getEntity(entityKey).getData();
  return (
    <StyledImage className="kiss-Draft__image-read">
      {url ? (
        <a href={url} target="_blank" rel="nofollow noopener">
          <div className="k-u-align-center">
            <img src={getImageUrl(src)} alt={description} />
          </div>
        </a>
      ) : (
        <div className="k-u-align-center">
          <img src={getImageUrl(src)} alt={description} />
        </div>
      )}
    </StyledImage>
  );
};

const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "IMAGE"
    );
  }, callback);
};

export const decorator = {
  strategy: imageStrategy,
  component: ImageEditor,
};

export const readDecorator = {
  strategy: imageStrategy,
  component: ImageDisplayer,
};

const ImageControls = ({ disabled, onUpload, onChange, errorMessage }) => {
  const [modalOpened, openModal] = useState(false);
  const [{ editorState, translations, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (!modalOpened) {
      setImageUrl("");
    }
  }, [modalOpened]);
  return (
    <>
      <ButtonEditor
        icon="image"
        disabled={contextDisabled || disabled}
        onToggle={() => {
          if (modalOpened) {
            openModal(false);
          } else {
            openModal(true);
          }
        }}
      />
      <Modal
        onClose={() => openModal(false)}
        isOpen={modalOpened}
      >
        {({ close }) => {
          return (
            <>
            <Modal.Title>{translations.image_upload.title}</Modal.Title>
            <Modal.Form>
                <Formik
                  initialValues={{ url: "", description: "" }}
                  validationSchema={Yup.object().shape({
                    url: Yup.string()
                      .url(translations.image.invalid_url)
                      .matches(
                        /(?:jpg|jpeg|gif|png)$/,
                        translations.image.invalid_extension
                      ),
                  })}
                  onSubmit={(
                    { url, fileSize, file, description },
                    { setSubmitting }
                  ) => {
                    return new Promise((resolve, reject) => {
                      if (file && file.size === 0) {
                        reject("WRONG");
                        setSubmitting(false);
                      }
                      if (!isEmpty(url)) {
                        resolve(url);
                      } else {
                        onUpload(file)
                          .then((url) => resolve(url))
                          .catch(() => {
                            setSubmitting(false);
                          });
                      }
                    }).then((url) => {
                      const contentState = editorState.getCurrentContent();
                      const contentStateWithEntity = contentState.createEntity(
                        "IMAGE",
                        "IMMUTABLE",
                        {
                          src: url,
                          description,
                        }
                      );
                      const entityKey =
                        contentStateWithEntity.getLastCreatedEntityKey();
                      const newEditorState = AtomicBlockUtils.insertAtomicBlock(
                        editorState,
                        entityKey,
                        " "
                      );
                      const newState = EditorState.forceSelection(
                        newEditorState,
                        newEditorState.getCurrentContent().getSelectionAfter()
                      );
                      if (isPreviousEmptyBlock(newState)) {
                        const newStateWithoutPreviousEmptyBlock =
                          removePreviousEmptyBlock(newState);

                        dispatch(
                          updateEditor(newStateWithoutPreviousEmptyBlock)
                        );
                      } else {
                        dispatch(updateEditor(newState));
                      }
                      close();
                      openModal(false);
                      setTimeout(() => openModal(false), 500);
                    });
                  }}
                >
                  {() => (
                    <Form
                      imageUrl={imageUrl}
                      setImageUrl={setImageUrl}
                      errorMessage={errorMessage}
                      onChange={onChange}
                    />
                  )}
                </Formik>
              </Modal.Form>
            </>
          );
        }}
      </Modal>
    </>
  );
};

ImageControls.propTypes = {
  disabled: PropTypes.bool,
  onUpload: PropTypes.func,
  errorMessage: PropTypes.string,
};

ImageControls.defaultProps = {
  disabled: false,
  onUpload: () => null,
};
export default ImageControls;
