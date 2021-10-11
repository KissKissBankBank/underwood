import React, { useContext } from "react";
import { RichUtils } from "draft-js";
import PropTypes from "prop-types";
import { EditorContext, updateEditor } from "../context";
import Button from "../components/button";

const UnorderedList = ({ disabled, onChange }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext);
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlockType = currentContent
    .getBlockForKey(selection.getStartKey())
    .get("type");

  return (
    <Button
      key="format_list_bulleted"
      active={currentBlockType === "unordered-list-item"}
      icon="format_list_bulleted"
      onToggle={(blockType) => {
        onChange();
        dispatch(
          updateEditor(RichUtils.toggleBlockType(editorState, blockType))
        );
      }}
      style="unordered-list-item"
      disabled={disabled || contextDisabled}
    />
  );
};

UnorderedList.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

UnorderedList.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default UnorderedList;
