import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getPreviousSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  createCommand,
} from "lexical";
import { useEffect } from "react";
import { $createMediaNode, MediaNode } from "../../nodes/MediaNode";

export const INSERT_MEDIA_COMMAND = createCommand();

export default function MediaPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([MediaNode])) {
      throw new Error("MediaPlugin: MediaNode not registred on editor");
    }
    return editor.registerCommand(
      INSERT_MEDIA_COMMAND,
      (payload) => {
        const selection = $getPreviousSelection();
        const mediaNode = $createMediaNode(payload);
        if ($isRangeSelection(selection)) {
          const focusNode = selection.focus.getNode();
          focusNode.getTopLevelElementOrThrow().insertBefore(mediaNode);
          focusNode.select();
          editor.focus();
        }
        return true;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor]);
}
