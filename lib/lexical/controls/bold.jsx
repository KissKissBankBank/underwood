import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getSelection, FORMAT_TEXT_COMMAND } from "lexical";
import React, { useState } from "react";
import Button from "./button";

const Bold = () => {
  const [isSelectionBold, setSelectionBold] = useState(false);
  const [editor] = useLexicalComposerContext();

  const onChange = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!selection) return;
      const currentNode = selection.focus.getNode();
      setSelectionBold(currentNode.hasFormat("bold"));
    });
  };
  return (
    <>
      <Button
        key="format_bold"
        icon="format_bold"
        active={isSelectionBold}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      />
      <OnChangePlugin onChange={onChange} />
    </>
  );
};

export default Bold;
