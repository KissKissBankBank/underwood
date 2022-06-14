import { getDefaultKeyBinding } from "draft-js";
import { getEntity, isImageBlock } from "../../utils";

const KEYCODE_BACKSPACE = 8;
const KEYCODE_ARROWUP = 38;
const KEYCODE_ARROWDOWN = 40;

const keyBindingHandler = (editorState) => (e) => {
  const currentEntity = getEntity(editorState);
  if (
    ![KEYCODE_BACKSPACE, KEYCODE_ARROWUP, KEYCODE_ARROWDOWN].includes(
      e.keyCode
    ) &&
    isImageBlock(currentEntity)
  ) {
    return "new-text-block";
  }
  return getDefaultKeyBinding(e);
};

export default keyBindingHandler;
