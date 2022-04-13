import { domElementHelper } from "@kisskissbankbank/kitten";
import {
  AtomicBlockUtils,
  CompositeDecorator,
  ContentBlock,
  ContentState,
  convertFromRaw,
  EditorState,
  genKey,
  Modifier,
  SelectionState,
} from "draft-js";
import DOMPurify from 'dompurify'
import { OrderedMap } from "immutable";
import flow from "lodash/fp/flow";
import get from "lodash/fp/get";
import isEmpty from "lodash/fp/isEmpty";
import omit from "lodash/fp/omit";
import reduce from "lodash/fp/reduce";
import trim from "lodash/fp/trim";
import { decorator as buttonLinkDecorator } from "./controls/button-link";
import { decorator as imageDecorator } from "./controls/image";
import { decorator as linkDecorator } from "./controls/link";
import { decorator as videoDecorator } from "./controls/video";
import linkify from "./enhancers/linkify";
import { getRawContent } from "./html-editor";

export const isJSONContent = (content) => {
  try {
    JSON.parse(content);
    return true;
  } catch (e) {
    return false;
  }
};

export const getJSONContent = (value) => {
  if (!domElementHelper.canUseDom()) return {};
  return isJSONContent(value) ? JSON.parse(value) : getRawContent(value, true);
};

export const getEditorValue = (value) => {
  if (!domElementHelper.canUseDom()) return null;
  if (!value || isEmpty(value)) {
    return EditorState.createEmpty();
  }
  try {
    const clean = DOMPurify.sanitize(value)
    return EditorState.createWithContent(
      isJSONContent(clean)
        ? convertFromRaw(JSON.parse(clean))
        : convertFromRaw(getRawContent(clean, true))
    );
  } catch (e) {
    return EditorState.createEmpty();
  }
};

export const resetEditor = (editorState) => {
  return EditorState.set(editorState, {
    decorator: new CompositeDecorator([
      imageDecorator,
      videoDecorator,
      linkDecorator,
      buttonLinkDecorator,
      linkify,
    ]),
  });
};

export const resetTypeOnSelectionAfter = (editorState) => {
  const contentState = editorState.getCurrentContent();
  return EditorState.push(
    editorState,
    Modifier.setBlockType(
      contentState,
      contentState.getSelectionAfter(),
      "unstyled"
    ),
    "change-block-type"
  );
};

export const getCurrentAlignmentStyle = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  return currentContent
    .getBlockForKey(selection.getStartKey())
    .getData()
    .get("alignmentStyle");
};

export const getCurrentBlock = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  return currentContent.getBlockForKey(anchorKey);
};

export const getCurrentSelection = (editorState) => {
  const currentContentBlock = getCurrentBlock(editorState);
  const selectionState = editorState.getSelection();
  const start = selectionState.getStartOffset();
  const end = selectionState.getEndOffset();
  return currentContentBlock.getText().slice(start, end);
};

export const getEntityKey = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const startKey = editorState.getSelection().getStartKey();
  const startOffset = editorState.getSelection().getStartOffset();
  const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
  return blockWithLinkAtBeginning.getEntityAt(startOffset);
};

export const getEntity = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const entityKey = getEntityKey(editorState);
  return !entityKey ? undefined : contentState.getEntity(entityKey);
};

export const getEntityText = (editorState, entityKey) => {
  let text = undefined;
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentContent = contentState.getBlockForKey(selection.getFocusKey());
  currentContent.findEntityRanges(
    (char) => char.getEntity() === entityKey,
    (start, end) => {
      text = currentContent.getText().slice(start, end);
    }
  );
  return text;
};

export const hasEntityFocus = (contentState, editorState, entityKey) => {
  const currentContent = contentState.getBlockForKey(
    editorState.getSelection().getFocusKey()
  );
  if (!currentContent) return false;
  const currentEntityFocused = currentContent.getEntityAt(
    editorState.getSelection().getStartOffset()
  );
  return entityKey === currentEntityFocused;
};

export const isEditorEmpty = (rawTextEditor) => {
  return flow(
    get("blocks"),
    reduce((acc, block) => `${acc}${block.text}`, ""),
    isEmpty
  )(rawTextEditor);
};

export const isPreviousBlockAnImage = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  const blockType = beforeBlock?.get("type");
  return blockType === "atomic";
};

export const removeEntities = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const currentBlock = currentContent.getBlockForKey(
    selectionState.getAnchorKey()
  );
  const entity = currentBlock.getEntityAt(selectionState.getStartOffset());
  let entitySelection = null;
  currentBlock.findEntityRanges(
    (character) => {
      return character.getEntity() === entity;
    },
    (start, end) => {
      entitySelection = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
      });
    }
  );
  const newContentState = Modifier.applyEntity(
    currentContent,
    entitySelection,
    null
  );
  return EditorState.push(editorState, newContentState, "apply-entity");
};

export const isPreviousEmptyBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = currentContent.getSelectionBefore();
  const anchorKey = selectionState.getAnchorKey();
  const curentBlock = currentContent.getBlockForKey(anchorKey);
  return flow(trim, isEmpty)(curentBlock.getText());
};

export const isEmptyBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const curentBlock = currentContent.getBlockForKey(anchorKey);
  return flow(trim, isEmpty)(curentBlock.getText());
};

export const isFirstBlock = (editorState) => {
  const currentContent = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const beforeBlock = currentContent.getBlockBefore(anchorKey);
  return !beforeBlock;
};

export const isCurrentBlockAllSelected = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const currentContent = editorState.getCurrentContent();
  const currentContentBlock = currentContent.getBlockForKey(anchorKey);
  const blockTextLength = currentContentBlock?.get("text")?.length;
  const start = selectionState?.getStartOffset() ?? 0;
  const end = selectionState?.getEndOffset() ?? 0;
  return blockTextLength === end - start;
};

export const removePreviousEmptyBlock = (editorState) => {
  const blockMap = editorState
    .getCurrentContent()
    .getBlockMap()
    .delete(editorState.getCurrentContent().getSelectionBefore().getFocusKey());
  const newContentStateWithoutBlock = editorState.getCurrentContent().merge({
    blockMap,
  });
  return EditorState.push(
    editorState,
    newContentStateWithoutBlock,
    "remove-range"
  );
};

export const removeCurrentBlock = (editorState, blockKey) => {
  const contentState = editorState.getCurrentContent();
  const contentBlock = contentState.getBlockForKey(blockKey);
  let targetRange = SelectionState.createEmpty(contentBlock.getKey());
  targetRange = targetRange.merge({
    anchorKey: contentBlock.getKey(),
    anchorOffset: 0,
    focusKey: contentBlock.getKey(),
    focusOffset: contentBlock.getLength(),
  });
  const newContentState = Modifier.removeRange(
    contentState,
    targetRange,
    "backward"
  );
  const blockMap = newContentState.getBlockMap().delete(blockKey);
  const newContentStateWithoutBlock = newContentState.merge({
    blockMap,
  });

  return EditorState.push(
    editorState,
    newContentStateWithoutBlock,
    "remove-range"
  );
};

export const moveSelectionTo = (editorState, anchorKey, focusOffset = 0) => {
  const selectionState = SelectionState.createEmpty(anchorKey).merge({
    focusOffset,
  });
  return EditorState.forceSelection(editorState, selectionState);
};

export const removeDataFromEntity = (editorState, entityKey, propsArray) => {
  const entityData = editorState
    .getCurrentContent()
    .getEntity(entityKey)
    .getData();
  const newContentState = editorState
    .getCurrentContent()
    .replaceEntityData(entityKey, omit(propsArray)(entityData));
  return EditorState.push(editorState, newContentState, "apply-entity");
};

export const forceSelection = (editorState) => {
  const selectionState = editorState.getSelection();
  const anchorKey = selectionState.getAnchorKey();
  const previousKey = editorState.getCurrentContent().getKeyBefore(anchorKey);
  const nextKey = editorState.getCurrentContent().getKeyAfter(anchorKey);
  const previousBlock = editorState
    .getCurrentContent()
    .getBlockBefore(anchorKey);
  // Editor must be empty ; we reset
  if (!nextKey && !previousKey) {
    const emptyEditor = resetEditor(EditorState.createEmpty());
    return EditorState.moveSelectionToEnd(emptyEditor);
  }
  let newSelectionState = SelectionState.createEmpty(previousKey || nextKey);
  newSelectionState = newSelectionState.merge({
    anchorOffset: previousBlock?.getLength() ?? 0,
    focusOffset: previousBlock?.getLength() ?? 0,
  });

  return EditorState.forceSelection(
    removeCurrentBlock(editorState, anchorKey),
    newSelectionState
  );
};

export const isImageBlock = (entity) => {
  const src = entity?.get("data")?.src;
  return (
    isImageDom(src) || // image uploaded by draft
    isImageFile(src) // image uploaded by legacy Editor
  );
};

export const isImageFile = (src) =>
  /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src);

export const isImageDom = (src) => /<img.*?src="(.*?)"[^\\>]+>/.test(src);

export const getImageUrl = (src) => {
  const [, url] = src?.match(/src\s*=\s*"(.+?)"/) ?? [];
  return url || src;
};

export const isVideoBlock = (entity) => {
  return !!entity?.get("data")?.embedlyHtml || !!entity?.get("data")?.html;
};

export const addBlockAfter = (editorState, keyBefore, blockParams = {}) => {
  const newBlock = new ContentBlock({
    key: genKey(),
    type: "unstyled",
    text: "",
    ...blockParams,
  });
  const contentState = editorState.getCurrentContent();
  const oldBlockMap = contentState.getBlockMap();
  const newBlockMap = OrderedMap().withMutations((map) => {
    for (let [k, v] of oldBlockMap.entries()) {
      map.set(k, v);
      if (keyBefore === k) {
        map.set(newBlock.getKey(), newBlock);
      }
    }
  });

  return EditorState.forceSelection(
    EditorState.push(
      editorState,
      ContentState.createFromBlockArray(Array.from(newBlockMap.values()))
        .set("selectionBefore", contentState.getSelectionBefore())
        .set("selectionAfter", contentState.getSelectionAfter())
    ),
    SelectionState.createEmpty(newBlock.getKey())
  );
};

export const createMediaBlock = (editorState, data = {}) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    "VIDEO",
    "MUTABLE",
    data
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ");
};
