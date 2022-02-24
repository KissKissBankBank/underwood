import {
  Field,
  ModalNext as Modal,
  Text,
  Title,
} from "@kisskissbankbank/kitten";
import classNames from "classnames";
import { AtomicBlockUtils, EditorState } from "draft-js";
import { ErrorMessage, Formik, useField, useFormikContext } from "formik";
import isEmpty from "lodash/fp/isEmpty";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import ButtonEditor from "../components/button";
import { InputWithButton, Label, SubmitLoader } from "../components/form";
import { EditorContext, updateEditor } from "../context";
import {
  getImageUrl,
  hasEntityFocus,
  moveSelectionTo,
  removeDataFromEntity,
} from "../utils";
import LinkInline from "./link-inline";

const StyledImage = styled.div`
  width: 100%;
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
`;

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
  const [{ editorState }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  const { src, url } = contentState.getEntity(entityKey).getData();
  const onClick = () => {
    dispatch(updateEditor(moveSelectionTo(editorState, blockKey)));
  };
  return (
    <StyledImage className="kiss-Draft__image" onClick={onClick}>
      <div
        className={classNames("kiss-Draft__image-focus", {
          "kiss-Draft__image-focus__focused": hasFocus,
        })}
      >
        <div className="k-u-align-center">
          <img src={getImageUrl(src)} alt="" />
        </div>
        {hasFocus && !!url && <LinkManager url={url} entityKey={entityKey} />}
      </div>
    </StyledImage>
  );
};

const ImageDisplayer = ({ contentState, entityKey }) => {
  const { src, url } = contentState.getEntity(entityKey).getData();
  return (
    <StyledImage className="kiss-Draft__image-read">
      {url ? (
        <a href={url} target="_blank" rel="nofollow noopener">
          <div className="k-u-align-center">
            <img src={getImageUrl(src)} alt="" />
          </div>
        </a>
      ) : (
        <div className="k-u-align-center">
          <img src={getImageUrl(src)} alt="" />
        </div>
      )}
    </StyledImage>
  );
};

const HiddenInput = styled.input`
  display: none;
`;

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

const Form = ({ imageUrl, setImageUrl }) => {
  const [{ translations }] = useContext(EditorContext);
  const { handleSubmit, values, isSubmitting } = useFormikContext();
  const [, , fileSizeHelpers] = useField("fileSize");
  const [, , urlHelpers] = useField("url");
  const [, , fileHelpers] = useField("file");
  const fileInputRef = useRef(null);
  return (
    <>
      <HiddenInput
        ref={fileInputRef}
        name="file"
        type="file"
        id="imageFile"
        onChange={(event) => {
          const file = event.target.files[0];
          if (!file.type.match("image.*")) {
            return;
          }
          fileHelpers.setValue(file);
          fileSizeHelpers.setValue(file.size);
          urlHelpers.setValue("");
          const reader = new FileReader();
          reader.addEventListener("load", (file) => {
            setImageUrl(file.target.result);
          });
          reader.readAsDataURL(file);
        }}
        accept="image/gif, image/jpeg, image/jpg, image/png"
      />
      <div className="k-u-margin-top-single">
        <Label htmlFor="url">{translations.image_upload.label}</Label>
      </div>
      <InputWithButton
        name="url"
        placeholder="https://"
        buttonValue={translations.image_upload.preview}
        onClick={() => {
          setImageUrl(values.url);
          fileSizeHelpers.setValue(0);
        }}
      />
      <div className="k-u-margin-vertical-single">
        {imageUrl && <img src={imageUrl} width="100%" alt="" />}
      </div>
      <ErrorMessage name="url">
        {(msg) => <Field.ErrorMessage>{msg}</Field.ErrorMessage>}
      </ErrorMessage>
      <ErrorMessage name="fileSize">
        {(msg) => <Field.ErrorMessage>{msg}</Field.ErrorMessage>}
      </ErrorMessage>
      <div className="k-u-margin-top-single">
        <div className="k-u-margin-bottom-single">
          <a
            href="#"
            className="k-u-link k-u-link-primary1"
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <Text tag="span" decoration="underline">
              {translations.image_upload.upload}
            </Text>
          </a>
        </div>
        <Modal.Paragraph align="left" noMargin>
          {translations.image_upload.help_file.formats}
          <br />
          {translations.image_upload.help_file.width}
          <br />
          {translations.image_upload.help_file.size}
        </Modal.Paragraph>
        <Modal.Actions>
          {isSubmitting ? (
            <SubmitLoader fluid />
          ) : (
            <Modal.Button
              type="button"
              size="big"
              modifier="helium"
              onClick={handleSubmit}
            >
              {translations.submit}
            </Modal.Button>
          )}
        </Modal.Actions>
      </div>
    </>
  );
};

const ImageControls = ({ disabled, onUpload }) => {
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
        headerTitle={
          <Title modifier="quaternary">{translations.image_upload.title}</Title>
        }
      >
        {({ close }) => {
          return (
            <Modal.Block>
              <Formik
                initialValues={{ url: "", fileSize: 0 }}
                validationSchema={Yup.object().shape({
                  url: Yup.string()
                    .url(translations.image.invalid_url)
                    .matches(
                      /(?:jpg|jpeg|gif|png)$/,
                      translations.image.invalid_extension
                    ),
                  fileSize: Yup.number().max(
                    5000000, // 5 Mo
                    translations.image.max_size
                  ),
                })}
                onSubmit={({ url, fileSize, file }) => {
                  return new Promise((resolve, reject) => {
                    if (isEmpty(url) && fileSize === 0) {
                      reject("WRONG");
                    }
                    if (!isEmpty(url) && fileSize === 0) {
                      resolve(url);
                    }
                    onUpload(file).then((url) => resolve(url));
                  }).then((url) => {
                    const contentState = editorState.getCurrentContent();
                    const contentStateWithEntity = contentState.createEntity(
                      "IMAGE",
                      "IMMUTABLE",
                      {
                        src: url,
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
                    dispatch(updateEditor(newState));
                    close();
                    openModal(false);
                    setTimeout(() => openModal(false), 500);
                  });
                }}
              >
                {() => <Form imageUrl={imageUrl} setImageUrl={setImageUrl} />}
              </Formik>
            </Modal.Block>
          );
        }}
      </Modal>
    </>
  );
};

ImageControls.propTypes = {
  disabled: PropTypes.bool,
  onUpload: PropTypes.func,
};

ImageControls.defaultProps = {
  disabled: false,
  onUpload: () => null,
};
export default ImageControls;
