import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import classNames from "classnames";
import { $getRoot, $getSelection } from "lexical";
import React, { useEffect } from "react";
import { EditorStyle } from "./style";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

const onChange = (editorState) => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();
    // console.log(root);
  });
};

const Playground = ({ className = "", withoutBorder = false }) => {
  return (
    <>
      <EditorStyle
        className={classNames("u-Editor k-u-margin-top-double", className, {
          "u-Editor--hasBorder": !withoutBorder,
        })}
      >
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={
            <div className="editor-placeholder">Enter some text...</div>
          }
        />
      </EditorStyle>
      <OnChangePlugin onChange={onChange} />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
    </>
  );
};

export default Playground;
