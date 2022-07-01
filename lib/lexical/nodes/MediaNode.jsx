import { parseHtml, ResponsiveIframeContainer } from "@kisskissbankbank/kitten";
import { DecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";
import React from "react";
import { sanitizeIframeReactComp } from "../../utils";

export class MediaNode extends DecoratorBlockNode {
  __html;
  __embedRatio;
  __height;

  static getType() {
    return "media";
  }
  static clone(node) {
    return new MediaNode(node.html, node.embedRatio, node.height);
  }

  constructor(html, embedRatio, height, format, key) {
    super(format, key);
    this.__html = html;
    this.__embedRatio = embedRatio;
    this.__height = height;
  }

  updateDOM() {
    return false;
  }

  isTopLevel() {
    return true;
  }

  decorate(_editor, _config) {
    const reactComp = parseHtml(this.__html, { sanitize: false });
    if (!reactComp) return null;
    return (
      <ResponsiveIframeContainer
        ratio={this.__embedRatio || 67.5}
        className="u-media"
        style={{ ...(this.__height && { height: this.__height }) }}
      >
        <div className="u-media-focus">
          {sanitizeIframeReactComp(reactComp)}
        </div>
      </ResponsiveIframeContainer>
    );
  }
}

export function $createMediaNode({ html, embedRatio, height }) {
  return new MediaNode(html, embedRatio, height);
}

export function $isMediaNode(node) {
  return node instanceof MediaNode;
}
