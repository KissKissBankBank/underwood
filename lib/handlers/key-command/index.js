import { RichUtils } from "draft-js";
import {
  forceSelection,
  getEntity,
  isCurrentBlockAllSelected,
  isEmptyBlock,
  isFirstBlock,
  isImageBlock,
  isPreviousBlockAnImage,
  isVideoBlock,
  removeEntities,
} from "../../utils";

export default (onChange) => (command, editorState) => {
  const currentEntity = getEntity(editorState);

  if (command === "new-text-block" && isImageBlock(currentEntity)) {
    // create a now block but as to think about keys handled to get that
    return "handled";
  }

  if (
    (command === "backspace" && isImageBlock(currentEntity)) ||
    isVideoBlock(currentEntity)
  ) {
    onChange(forceSelection(editorState));
    return "handled";
  }

  if (command === "backspace" && currentEntity?.getType() === "IMAGE") {
    onChange(removeEntities(editorState));
    return "handled";
  }

  if (
    command === "backspace" &&
    isCurrentBlockAllSelected(editorState) &&
    isPreviousBlockAnImage(editorState)
  ) {
    onChange(forceSelection(editorState));
    return "handled";
  }

  if (
    command === "backspace" &&
    isFirstBlock(editorState) &&
    isEmptyBlock(editorState)
  ) {
    onChange(forceSelection(editorState));
    return "handled";
  }

  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    onChange(newState);
    return "handled";
  }
  return "not-handled";
};
