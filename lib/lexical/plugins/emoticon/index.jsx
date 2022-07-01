import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TextNode } from "lexical";
import { useEffect } from "react";
import { $createEmoticonNode } from "../../nodes/EmoticonNode";

function emoticonTransform(node) {
  const textContent = node.getTextContent();
  const matcher = textContent.indexOf(":)");
  if (matcher !== -1) {
    let middleNode;
    if (matcher === 0) {
      [middleNode] = node.splitText(matcher, matcher + 2);
    } else {
      [, middleNode] = node.splitText(matcher, matcher + 2);
    }
    const emoticonNode = $createEmoticonNode("", "🙂");
    middleNode.replace(emoticonNode);
  }
}

function useEmoticons(editor) {
  useEffect(() => {
    const removeTransform = editor.registerNodeTransform(
      TextNode,
      emoticonTransform
    );
    return () => removeTransform();
  }, [editor]);
}

export default function EmoticonPlugin() {
  const [editor] = useLexicalComposerContext();
  useEmoticons(editor);
  return null;
}
