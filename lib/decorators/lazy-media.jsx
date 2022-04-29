import {
  LazyLoader,
  parseHtml,
  ResponsiveIframeContainer,
} from "@kisskissbankbank/kitten";
import React from "react";
import { sanitizeIframeReactComp } from "../utils";

const Media = (props) => {
  const { html } = props.contentState.getEntity(props.entityKey).getData();
  const reactComp = parseHtml(html, { sanitize: false });
  return (
    <LazyLoader>
      <ResponsiveIframeContainer ratio={67.5}>
        {sanitizeIframeReactComp(reactComp)}
      </ResponsiveIframeContainer>
    </LazyLoader>
  );
};

const mediaStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "MEDIA"
    );
  }, callback);
};

export default {
  strategy: mediaStrategy,
  component: Media,
};
