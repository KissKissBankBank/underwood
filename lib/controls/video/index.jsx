import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Title,
  Field,
  ResponsiveIframeContainer,
  parseHtml,
  ModalNext as Modal,
} from "@kisskissbankbank/kitten";
import ButtonEditor from "../../components/button";
import { Label, InputWithButton, SubmitLoader } from "../../components/form";
import { oembed } from "../../api/embedly";
import { EditorContext, updateEditor } from "../../context";
import { createMediaBlock, hasEntityFocus, moveSelectionTo } from "../../utils";
import { getDataForProvider } from "./providers";

const VideoEditor = ({ contentState, entityKey, blockKey }) => {
  const { embedlyHtml, embedRatio, html } = contentState
    .getEntity(entityKey)
    .getData();
  const [{ editorState }, dispatch] = useContext(EditorContext);
  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(updateEditor(moveSelectionTo(editorState, blockKey)));
  };
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  return (
    <ResponsiveIframeContainer
      ratio={embedRatio || 67.5}
      className="kiss-Draft__media"
    >
      <div
        className={classNames("kiss-Draft__media-focus", {
          "kiss-Draft__media-focus__focused": hasFocus,
        })}
        onClick={onClick}
      >
        {parseHtml(embedlyHtml || html, { sanitize: false })}
      </div>
    </ResponsiveIframeContainer>
  );
};

const VideoDisplayer = (props) => {
  const { embedlyHtml, embedRatio, html } = props.contentState
    .getEntity(props.entityKey)
    .getData();
  return (
    <ResponsiveIframeContainer
      ratio={embedRatio || 67.5}
      className="kiss-Draft__media-read"
    >
      {parseHtml(embedlyHtml || html, { sanitize: false })}
    </ResponsiveIframeContainer>
  );
};

const videoStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      ["VIDEO", "MEDIA"].includes(contentState.getEntity(entityKey).getType())
    );
  }, callback);
};

export const decorator = {
  strategy: videoStrategy,
  component: VideoEditor,
};

export const readDecorator = {
  strategy: videoStrategy,
  component: VideoDisplayer,
};

const VideoControls = ({ disabled, onChange, embedlyApiKey }) => {
  const [{ editorState, translations, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext);
  const [modalOpened, openModal] = useState(false);
  const [embedlyHtml, setEmbedlyHtml] = useState(undefined);
  const [embedRatio, setEmbedRatio] = useState(undefined);
  const [hasOembedError, oembedError] = useState(false);

  return (
    <>
      <ButtonEditor
        icon="video"
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
        variant="orion"
        headerTitle={
          <Title modifier="quaternary">{translations.media_upload.title}</Title>
        }
      >
        {({ close }) => {
          return (
            <Modal.Block>
              <Formik
                initialValues={{ url: "" }}
                validationSchema={Yup.object().shape({
                  url: Yup.string().url(translations.video.invalid_url),
                })}
                onSubmit={({ url }) => {
                  onChange(url);
                  oembedError(false);
                  return oembed({
                    key: embedlyApiKey,
                    maxwidth: 640,
                    url,
                  }).then((response) => {
                    if (response.type === "error") {
                      oembedError(true);
                      return;
                    }
                    const { html, ratio } = getDataForProvider(response);
                    dispatch(
                      updateEditor(
                        createMediaBlock(editorState, {
                          html,
                          embedRatio: ratio,
                        })
                      )
                    );
                    close();
                    setTimeout(() => {
                      openModal(false);
                      setEmbedlyHtml(undefined);
                    }, 500);
                  });
                }}
              >
                {({ handleSubmit, isSubmitting, values }) => {
                  return (
                    <>
                      <Label
                        size="micro"
                        className="k-u-margin-bottom-single"
                        htmlFor="url"
                      >
                        {translations.image_upload.label}
                      </Label>
                      <InputWithButton
                        name="url"
                        variant="orion"
                        placeholder="https://"
                        buttonValue={translations.image_upload.preview}
                        onClick={() => {
                          oembedError(false);
                          oembed({
                            key: embedlyApiKey,
                            maxwidth: 640,
                            url: values.url,
                          }).then((response) => {
                            if (response.type === "error") {
                              oembedError(true);
                              return;
                            }
                            const { html, ratio } =
                              getDataForProvider(response);
                            setEmbedRatio(ratio);
                            setEmbedlyHtml(html);
                          });
                        }}
                      />
                      {embedlyHtml && (
                        <div className="k-u-margin-vertical-single">
                          <ResponsiveIframeContainer ratio={embedRatio}>
                            {parseHtml(embedlyHtml, { sanitize: false })}
                          </ResponsiveIframeContainer>
                        </div>
                      )}
                      {hasOembedError && (
                        <Field.ErrorMessage>
                          {translations.video.problem}
                        </Field.ErrorMessage>
                      )}
                      <Modal.Actions>
                        {isSubmitting ? (
                          <SubmitLoader fluid />
                        ) : (
                          <Modal.Button
                            size="big"
                            variant="orion"
                            type="button"
                            modifier="helium"
                            onClick={handleSubmit}
                          >
                            {translations.submit}
                          </Modal.Button>
                        )}
                      </Modal.Actions>
                    </>
                  );
                }}
              </Formik>
            </Modal.Block>
          );
        }}
      </Modal>
    </>
  );
};

VideoControls.propTypes = {
  embedlyApiKey: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

VideoControls.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default VideoControls;
