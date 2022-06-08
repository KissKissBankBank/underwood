import { Button } from "@kisskissbankbank/kitten";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalOnChangePlugin from "@lexical/react/LexicalOnChangePlugin";
import { $getSelection, FORMAT_TEXT_COMMAND } from "lexical";
import React, { useState } from "react";

const Controls = () => {
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
    <div className="k-u-margin-bottom-double">
      <Button
        active={isSelectionItalic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        ITALIC
      </Button>
      <LexicalOnChangePlugin onChange={onChange} />
    </div>
  );
};

export default Controls;
