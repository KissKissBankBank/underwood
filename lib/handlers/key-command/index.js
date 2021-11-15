import {
  forceSelection,
  getEntity,
  isCurrentBlockAllSelected,
  isPreviousBlockAnImage,
  isVideoBlock,
  isImageBlock,
  isFirstBlock,
  isEmptyBlock,
  removeEntities,
} from "../../utils";
import { RichUtils } from "draft-js";

export default (onChange) => (command, editorState) => {
  const currentEntity = getEntity(editorState);

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
