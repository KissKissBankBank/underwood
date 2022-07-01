import {
  Button,
  Field,
  Modal,
  parseHtml,
  ResponsiveIframeContainer,
} from "@kisskissbankbank/kitten";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Formik } from "formik";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { oembed } from "../../api/embedly";
import { InputWithButton, Label, SubmitLoader } from "../../components/form";
import { EditorContext } from "../../context";
import { INSERT_MEDIA_COMMAND } from "../../plugins/media";
import sanitizeIframeReactComp from "../../utils/sanitize-iframe-react-comp";
import ButtonEditor from "../button";
import { getDataForProvider } from "./providers";

const MediaControls = ({ disabled, onChange, embedlyApiKey }) => {
  const [{ translations }] = useContext(EditorContext);
  const [editor] = useLexicalComposerContext();
  const [modalOpened, openModal] = useState(false);
  const [embedlyHtml, setEmbedlyHtml] = useState(undefined);
  const [embedRatio, setEmbedRatio] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [hasOembedError, oembedError] = useState(false);

  return (
    <>
      <ButtonEditor
        icon="video"
        disabled={disabled}
        onClick={() => {
          if (modalOpened) {
            openModal(false);
          } else {
            openModal(true);
          }
        }}
      />
      <Modal onClose={() => openModal(false)} isOpen={modalOpened}>
        {({ close }) => {
          return (
            <>
              <Modal.Title>{translations.media_upload.title}</Modal.Title>
              <Modal.Form align="left">
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
                      const { html, ratio, height } =
                        getDataForProvider(response);
                      console.log(html, ratio, height);
                      editor.dispatchCommand(INSERT_MEDIA_COMMAND, {
                        html,
                        embedRatio: ratio,
                        height,
                      });

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
                          className="k-u-margin-bottom-single"
                          htmlFor="url"
                        >
                          {translations.image_upload.label}
                        </Label>
                        <InputWithButton
                          name="url"
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
                              const {
                                html,
                                ratio,
                                height = undefined,
                              } = getDataForProvider(response);
                              setEmbedRatio(ratio);
                              setEmbedlyHtml(html);
                              setHeight(height);
                            });
                          }}
                        />
                        {embedlyHtml && (
                          <div className="k-u-margin-vertical-single">
                            <ResponsiveIframeContainer
                              ratio={embedRatio}
                              style={{ ...(height && { height }) }}
                            >
                              {sanitizeIframeReactComp(
                                parseHtml(embedlyHtml, { sanitize: false })
                              )}
                            </ResponsiveIframeContainer>
                          </div>
                        )}
                        {hasOembedError && (
                          <Field.ErrorMessage>
                            {translations.video.problem}
                          </Field.ErrorMessage>
                        )}
                        {embedlyHtml && (
                          <Modal.Actions>
                            {isSubmitting ? (
                              <SubmitLoader size="large" />
                            ) : (
                              <Button
                                size="large"
                                type="submit"
                                modifier="helium"
                                onClick={handleSubmit}
                              >
                                {translations.submit}
                              </Button>
                            )}
                          </Modal.Actions>
                        )}
                      </>
                    );
                  }}
                </Formik>
              </Modal.Form>
            </>
          );
        }}
      </Modal>
    </>
  );
};

MediaControls.propTypes = {
  embedlyApiKey: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

MediaControls.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default MediaControls;
