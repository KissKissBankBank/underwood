import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { EditorProvider } from "./context";

const defaultTranslations = {
  button_link: {
    title: "",
    text: "",
    url: "",
  },
  link: {
    text: {
      label: "",
    },
    title: "",
    error: "",
    button: {
      delete: "",
    },
  },
  controls: {
    format_bold: "",
    activated_format_bold: "",
    format_italic: "",
    activated_format_italic: "",
    format_list_bulleted: "",
    activated_format_list_bulleted: "",
    ["k-u-align-left"]: "",
    ["activated_k-u-align-left"]: "",
    ["k-u-align-center"]: "",
    ["activated_k-u-align-center"]: "",
    ["k-u-align-right"]: "",
    ["activated_k-u-align-right"]: "",
    image: "",
    activated_image: "",
    video: "",
    activated_video: "",
    link: "",
    activated_link: "",
    quote: "",
    activated_quote: "",
  },
  image_upload: {
    title: "",
    label: "",
    url: "",
    preview: "",
    upload: "",
    help_file: {
      formats: "",
      width: "",
      size: "",
    },
  },
  image: {
    invalid_url: "",
    invalid_extension: "",
    max_size: "",
  },
  media_upload: {
    title: "",
  },
  video: {
    problem: "",
    invalid_url: "",
  },
  submit: "",
  form: {
    tooltip_action_label: "",
    button_loading: "",
  },
};

const Editor = ({
  onInit,
  translations,
  configResponsiveImageHandler,
  children,
}) => {
  useEffect(() => {
    onInit();
  }, []);
  return (
    <EditorProvider
      translations={{ ...defaultTranslations, ...translations }}
      configResponsiveImageHandler={configResponsiveImageHandler}
    >
      {children}
    </EditorProvider>
  );
};

export const editorPropTypes = {
  props: {
    onInit: PropTypes.func,
    configResponsiveImageHandler: PropTypes.shape({}),
    translations: PropTypes.shape(),
  },
  defaultProps: {
    onInit: () => null,
    configResponsiveImageHandler: {},
    translations: {},
  },
};

Editor.propTypes = editorPropTypes.props;
Editor.defaultProps = editorPropTypes.defaultProps;

export { Editor };
export { default as Playground } from "./playground";
export { default as Controls } from "./controls";
export { default as Displayer } from "./draft-displayer";
export { default as Title } from "./title";
