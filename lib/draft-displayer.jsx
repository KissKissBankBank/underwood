import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { domElementHelper } from "@kisskissbankbank/kitten";
import {
  CompositeDecorator,
  ContentState,
  convertFromHTML,
  convertFromRaw,
  Editor,
  EditorState,
} from "draft-js";
import { EditorStyle, styleBlock } from "./style";
import { readDecorator as videoReadDecorator } from "./controls/video";
import { readDecorator as imageReadDecorator } from "./controls/image";
import { readDecorator as linkDecorator } from "./controls/link";
import { readDecorator as buttonLinkDecorator } from "./controls/button-link";
import linkify from "./enhancers/linkify";
import HtmlEditor from "./html-editor";
import { customBlockRenderMap } from "./block-render-map";
import { EditorProvider } from "./context";

const getinitialValue = (value) => {
  if (!domElementHelper.canUseDom()) return null;
  if (!value) {
    return EditorState.createEmpty();
  }
  try {
    return EditorState.createWithContent(
      convertFromRaw(JSON.parse(value)),
      new CompositeDecorator([
        imageReadDecorator,
        videoReadDecorator,
        linkDecorator,
        buttonLinkDecorator,
        linkify,
      ])
    );
  } catch (e) {
    const blocksFromHTML = convertFromHTML(`<p>${value}</p>`);
    const contentState = ContentState.createFromBlockArray(blocksFromHTML);
    return EditorState.createWithContent(contentState);
  }
};

const isJSONContent = (content) => {
  try {
    JSON.parse(content);
    return true;
  } catch (e) {
    return false;
  }
};

const renderRaw = (text) => {
  try {
    const value = JSON.parse(text);
    const render = value.blocks.reduce(
      (acc, value) => `${acc} ${value.text}`,
      ""
    );
    return <div>{render}</div>;
  } catch (e) {
    return <div>{text}</div>;
  }
};

const DraftDisplayer = ({
  text,
  useRichTextStyle,
  perfEnabled,
  isDisabled,
  compact,
  configResponsiveImageHandler,
}) => {
  if (!domElementHelper.canUseDom()) return renderRaw(text);
  return isJSONContent(text) ? (
    <EditorProvider configResponsiveImageHandler={configResponsiveImageHandler}>
      <EditorStyle />
      <section
        className={classNames("k-Editor__root", {
          "k-Editor__compact": compact,
        })}
      >
        <Editor
          onChange={() => null}
          editorState={getinitialValue(text)}
          blockStyleFn={styleBlock({ isDisabled, useRichTextStyle, compact })}
          blockRenderMap={customBlockRenderMap}
          readOnly
        />
      </section>
    </EditorProvider>
  ) : (
    <EditorProvider configResponsiveImageHandler={configResponsiveImageHandler}>
      <HtmlEditor
        html={text}
        perfEnabled={perfEnabled}
        useRichTextStyle={useRichTextStyle}
      />
    </EditorProvider>
  );
};

DraftDisplayer.propTypes = {
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  useRichTextStyle: PropTypes.bool,
  isDisabled: PropTypes.bool,
  perfEnabled: PropTypes.bool,
  compact: PropTypes.bool,
};

DraftDisplayer.defaultProps = {
  useRichTextStyle: false,
  isDisabled: false,
  perfEnabled: false,
  compact: false,
};

export default DraftDisplayer;
