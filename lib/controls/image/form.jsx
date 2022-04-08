import {
  AlertBox,
  ButtonGroup,
  Field,
  ImageDropUploader,
  ModalNext as Modal,
  Text,
} from "@kisskissbankbank/kitten";
import { ErrorMessage, useField, useFormikContext } from "formik";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  InputText,
  InputWithButton,
  Label,
  SubmitLoader,
} from "../../components/form";
import { EditorContext } from "../../context";

const StyledButtonGroup = styled(ButtonGroup)`
  .k-ButtonGroup__button {
    width: 50%;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 16/10;
`;

const UPLOAD_METHOD = {
  URL: "URL",
  FILE: "FILE",
};

const Form = ({
  imageUrl,
  setImageUrl,
  errorMessage,
  onChange = () => null,
}) => {
  const [uploadMethod, setUploadMethod] = useState(UPLOAD_METHOD.FILE);
  const [{ translations }] = useContext(EditorContext);
  const { handleSubmit, values, isSubmitting } = useFormikContext();
  const [, , urlHelpers] = useField("url");
  const [, , fileHelpers] = useField("file");
  return (
    <>
      <StyledButtonGroup className="k-u-margin-bottom-double">
        <ButtonGroup.Button
          active={uploadMethod === UPLOAD_METHOD.FILE}
          onClick={() => {
            setUploadMethod(UPLOAD_METHOD.FILE);
            setImageUrl(undefined);
          }}
        >
          {translations.image_upload.button_file}
        </ButtonGroup.Button>
        <ButtonGroup.Button
          active={uploadMethod === UPLOAD_METHOD.URL}
          onClick={() => {
            setUploadMethod(UPLOAD_METHOD.URL);
            setImageUrl(undefined);
          }}
        >
          {translations.image_upload.button_url}
        </ButtonGroup.Button>
      </StyledButtonGroup>
      {uploadMethod === UPLOAD_METHOD.FILE && !imageUrl && (
        <ImageDropUploader
          id="underwood-image-drop-uploader"
          dimensionErrorText={translations.image_upload.dimension_error}
          sizeErrorText={translations.image_upload.max_size}
          errorMessage={errorMessage}
          onChange={(event) => {
            onChange(event);
            const file = event.file;
            if (!file?.type?.match("image.*")) {
              return;
            }
            fileHelpers.setValue(file);
            urlHelpers.setValue("");
            setImageUrl(event.value);
          }}
          acceptedFileSize={5242880}
          acceptedImageDimensions={{
            height: 1000,
            width: 4000,
          }}
          acceptedMimeTypes={[
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
          ]}
          buttonTitle={translations.image_upload.button_title}
          buttonText={
            <div className="k-u-flex k-u-flex-direction-column k-u-flex-gap-noneHalf">
              <span>{translations.image_upload.help_file.formats}</span>
              <span>{translations.image_upload.help_file.width}</span>
              <span>{translations.image_upload.help_file.size}</span>
            </div>
          }
        />
      )}
      {uploadMethod === UPLOAD_METHOD.URL && (
        <>
          <div className="k-u-margin-top-single">
            <Label htmlFor="url">{translations.image_upload.label}</Label>
          </div>
          <InputWithButton
            name="url"
            placeholder="https://"
            buttonValue={translations.image_upload.preview}
            onClick={() => {
              setImageUrl(values.url);
            }}
          />
        </>
      )}
      <div className="k-u-margin-vertical-single">
        {imageUrl && (
          <>
            <ImagePreview src={imageUrl} alt="" />
            {uploadMethod === UPLOAD_METHOD.FILE && (
              <div className="k-u-margin-top-singleHalf k-u-align-center">
                <Text
                  size="small"
                  tag="button"
                  weight="regular"
                  onClick={() => setImageUrl(undefined)}
                  className="k-u-reset-button k-u-link k-u-link-primary1"
                >
                  {translations.image_upload.modify_image}
                </Text>
              </div>
            )}
          </>
        )}
      </div>
      {imageUrl && (
        <>
          <div className="k-u-margin-vertical-double">
            <Label htmlFor="description">
              {translations.image_upload.description.label}
            </Label>
            <InputText
              name="description"
              tag="autoresize"
              placeholder={translations.image_upload.description.placeholder}
            />
          </div>
          <AlertBox>{translations.image_upload.description.helper}</AlertBox>
        </>
      )}
      <ErrorMessage name="url">
        {(msg) => <Field.ErrorMessage>{msg}</Field.ErrorMessage>}
      </ErrorMessage>
      {imageUrl && (
        <Modal.Actions>
          {isSubmitting ? (
            <SubmitLoader fit="fluid" />
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
      )}
    </>
  );
};

export default Form;
