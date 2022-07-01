import {
  DropdownMenu,
  Modal, EditIconNext, LinkIconNext, CrossIconNext, GarbageIcon } from "@kisskissbankbank/kitten";
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
import LinkModal from '../link-modal'

const ImageEditor = ({ contentState, entityKey, blockKey }) => {
  const [{ editorState, translations }, dispatch] = useContext(EditorContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const hasFocus = hasEntityFocus(
    editorState.getCurrentContent(),
    editorState,
    entityKey
  );
  const { src, url, description } = contentState.getEntity(entityKey).getData();
  const [isMenuVisible, setMenuVisible] = useState(hasFocus);

  useEffect(() => {
    setMenuVisible(hasFocus)
  }, [hasFocus, showUpdateModal, showLinkModal])

  const onClick = () => {
    setTimeout(
      () => dispatch(updateEditor(moveSelectionTo(editorState, blockKey))),
      1
    );
  };

  const handleRemoveImage = () => {
  };

  return (
    <div className="u-Draft__image" onClick={onClick}>
      <div
        className={classNames("u-Draft__image-focus", {
          "u-Draft__image-focus__focused": hasFocus,
        })}
      >
        <img src={getImageUrl(src)} alt={description} />
        <DropdownMenu
          className="u-Draft__image__menu"
          menuPosition="center"
          positionedButton
          open={isMenuVisible}
          contentEditable={false}
          onClose={() => setMenuVisible(false)}
        >
          <DropdownMenu.Button onClick={() => setShowUpdateModal(true)} icon={<EditIconNext />}>
            {isEmpty(description)
              ? translations.image_upload.add_label
              : translations.image_upload.modify_label}
          </DropdownMenu.Button>
          {!url && (
            <DropdownMenu.Button onClick={() => setShowLinkModal(true)} icon={<LinkIconNext />}>
              {translations.link.title}
            </DropdownMenu.Button>
          )}
          {!!url && (
            <>
              <DropdownMenu.Separator />
              <DropdownMenu.Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(
                    updateEditor(removeDataFromEntity(editorState, entityKey, ["url"]))
                  );
                }}
                icon={<CrossIconNext />}
              >
                {translations.link.button.delete}
              </DropdownMenu.Button>
              <DropdownMenu.Link
                icon={<LinkIconNext />}
                href={url}
                target="_blank"
                rel="noopener"
                tag="a"
                color="font1"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(url, "_blank").focus();
                }}
                className="k-u-ellipsis"
              >
                {translations.link.button.visit}
                {' '}
                <span className="k-u-ellipsis">{url}</span>
              </DropdownMenu.Link>
            </>
          )}
          <DropdownMenu.Button onClick={handleRemoveImage} icon={<GarbageIcon />}>
            {translations.image_upload.remove_image}
          </DropdownMenu.Button>
        </DropdownMenu>
      </div>
      {showUpdateModal && (
        <Update
          onClose={() => setShowUpdateModal(false)}
          entityKey={entityKey}
          description={description}
        />
      )}
      {showLinkModal && (
        <LinkModal
          onClose={() => {
            setShowLinkModal(false);
          }}
          isOpen
          /*onChange={onChange}*/
        />

      )}
    </div>
  );
};

const ImageDisplayer = ({ contentState, entityKey }) => {
  const { src, url, description } = contentState.getEntity(entityKey).getData();
  return (
    <div className="u-Draft__image-read">
      {url ? (
        <a href={url} target="_blank" rel="nofollow noopener">
          <img src={getImageUrl(src)} alt={description} />
        </a>
      ) : (
        <img src={getImageUrl(src)} alt={description} />
      )}
    </div>
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
      <Modal onClose={() => openModal(false)} isOpen={modalOpened} zIndex={1000}>
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
