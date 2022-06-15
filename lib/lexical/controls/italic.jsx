import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getSelection, FORMAT_TEXT_COMMAND } from "lexical";
import React, { useState } from "react";
import Button from "./button";

const Italic = () => {
  const [isSelectionItalic, setSelectionItalic] = useState(false);
  const [editor] = useLexicalComposerContext();

  const onChange = () => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!selection) return;
      const currentNode = selection.focus.getNode();
      setSelectionItalic(currentNode.hasFormat("italic"));
    });
  };
  return (
    <>
      <Button
        key="format_italic"
        icon="format_italic"
        active={isSelectionItalic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        ITALIC
      </Button>
      <OnChangePlugin onChange={onChange} />
    </>
  );
};

export default Italic;
