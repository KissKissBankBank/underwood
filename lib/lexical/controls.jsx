import { Button } from "@kisskissbankbank/kitten";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  COMMAND_PRIORITY_LOW,
  FORMAT_TEXT_COMMAND,
} from "lexical";
import React, { useEffect } from "react";

const Controls = () => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.registerCommand(
      FORMAT_TEXT_COMMAND,
      (payload) => {
        const node = $getSelection().anchor.getNode();
        node.setFormat(payload);
        return true;
      },
      COMMAND_PRIORITY_LOW
    );
  });
  return (
    <div className="k-u-margin-bottom-double">
      <Button
        onClick={() => {
          console.log("CLICK");
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        ITALIC
      </Button>
    </div>
  );
};

export default Controls;
