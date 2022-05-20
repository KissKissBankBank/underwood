import { domElementHelper, parseHtml } from "@kisskissbankbank/kitten";
import classNames from "classnames";
import {
  convertToRaw,
  DefaultDraftBlockRenderMap,
  Editor,
  EditorState,
} from "draft-js";
import { Map } from "immutable";
import PropTypes from "prop-types";
import React from "react";
import converter, {
  lazyDecorators,
  performanceDecorators,
} from "./converter/html-convert-to-draft";
import editionConverter from "./converter/html-convert-to-draft-editor";

const blockRenderMap = Map({
  paragraph: {
    element: "p",
  },
});

const convertContent = (html, isEdition = false) => {
  const initialContentState = isEdition
    ? editionConverter(html)
    : converter(html);
  return initialContentState.set(
    "blockMap",
    initialContentState.getBlockMap().filter((contentblock) => {
      return !(
        !["atomic", "br"].includes(contentblock.getType()) &&
        contentblock.getText() === ""
      );
    })
  );
};

export const getRawContent = (html, isEdition = false) => {
  return convertToRaw(convertContent(html, isEdition));
};

export const createContent = (html) => {
  return EditorState.createWithContent(convertContent(html));
};

const HtmlEditor = ({ html, perfEnabled, useRichTextStyle }) => {
  if (!html) return null;

  // Because react-on-rails doesn't handle document object
  if (!domElementHelper.canUseDom()) {
    // Replace "real" image URLS with the default (svg) image.
    const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`;
    const imageRegEx = /<img([\S ]*?) src="[\S]+?"/gm;
    const imageReplacer = `<img $1 src="${defaultImage}"`;
    html = html.replaceAll(imageRegEx, imageReplacer);
    html = html.replaceAll("\n", "<br/>");

    // This is a temporary fix to disable display of images and iFrames
    // while the SSR doesn’t compile DraftJS contents,
    // when Responsive Images are enabled for the current project.
    if (perfEnabled) {
      html = html.replace(/<(img|iframe)([\S ]+?) (src=")/gm, "<$1 $2 data-$3");
    }

    return (
      <section className={classNames({ "kiss-RichText": useRichTextStyle })}>
        {parseHtml(html)}
      </section>
    );
  }

  return (
    <section className={classNames({ "kiss-RichText": useRichTextStyle })}>
      <Editor
        editorState={EditorState.set(createContent(html), {
          decorator: perfEnabled ? performanceDecorators : lazyDecorators,
        })}
        onChange={() => null}
        blockRenderMap={DefaultDraftBlockRenderMap.merge(blockRenderMap)}
        blockStyleFn={(contentBlock) => {
          const textAlignStyle = contentBlock.getData().get("textAlign");
          switch (textAlignStyle) {
            case "right":
              return "draft-align-right";
            case "center":
              return "draft-align-center";
            case "left":
              return "draft-align-left";
            default:
              return "";
          }
        }}
        readOnly={true}
      />
    </section>
  );
};

HtmlEditor.propTypes = {
  useRichTextStyle: PropTypes.bool,
};

HtmlEditor.defaultProps = {
  useRichTextStyle: true,
};

export default HtmlEditor;
