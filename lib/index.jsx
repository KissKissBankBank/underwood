import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { convertToRaw } from "draft-js";
import { EditorProvider } from "./context";

const defaultTranslations = {
  button_link: {
    title: "Add a button",
    text: "Button text",
    url: "button URL",
  },
  link: {
    text: {
      label: "Your text",
    },
    title: "Add a link",
    error: "This link seems incorrect",
    button: {
      delete: "Delete",
    },
  },
  controls: {
    format_bold: "Bold",
    activated_format_bold: "Bold (activated)",
    format_italic: "Italic",
    activated_format_italic: "Italic (activated)",
    format_list_bulleted: "Add a list",
    activated_format_list_bulleted: "Add a list (activated)",
    ["k-u-align-left"]: "Left Alignment",
    ["activated_k-u-align-left"]: "Left Alignment (activated)",
    ["k-u-align-center"]: "Alignment in the center",
    ["activated_k-u-align-center"]: "Alignment in the center (activated)",
    ["k-u-align-right"]: "Right Alignment",
    ["activated_k-u-align-right"]: "Right Alignment (activated)",
    image: "Add an image",
    activated_image: "Add an image (activated)",
    video: "Add a video",
    activated_video: "Add a video (activated)",
    link: "Add a link",
    activated_link: "Add a link (activated)",
    quote: "Add a quote",
    activated_quote: "Add a quote (activated)",
  },
  image_upload: {
    title: "Insert a picture",
    label: "URL:",
    url: "URL:",
    preview: "Preview",
    upload: "Select a file on your computer",
    help_file: {
      formats: "Available formats: jpg, jpeg, gif, png, bmp",
      width: "Maximum weight: 5 MB",
      size: "Maximum width and height: 1000x4000 pixels",
    },
  },
  image: {
    invalid_url: "Your url doesn't seem correct",
    invalid_extension: "The format of your image is not supported",
    max_size: "The size of your image exceeds 5 MB",
  },
  media_upload: {
    title: "Insert a media",
  },
  video: {
    problem: "An error occurred while loading the content. Please try again",
    invalid_url: "Your url doesn't seem correct",
  },
  submit: "Validate",
  form: {
    tooltip_action_label: "More informations",
    button_loading: "Loading",
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
export { isEditorEmpty, getJSONContent } from "./utils";
export { convertToHTML } from "draft-convert";
export { convertToRaw };
