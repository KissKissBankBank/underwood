import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getSelection, $isTextNode, FORMAT_ELEMENT_COMMAND } from "lexical";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../button";

const Generic = ({ disabled, label, onChange }) => {
  const [editor] = useLexicalComposerContext();
  const [isSelection, setSelection] = useState(false);
  return (
    <>
      <Button
        key={label}
        icon={label}
        disabled={disabled}
        active={isSelection}
        onClick={() => {
          onChange();
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, label);
          editor.update(() => {
            const selection = $getSelection();
            if (!selection) return;
            selection.getNodes().forEach((node) => {
              if ($isTextNode(node)) {
                node.setStyle(label);
              }
            });
          });
        }}
      />
      <OnChangePlugin
        onChange={() => {
          editor.getEditorState().read(() => {
            const selection = $getSelection();
            if (!selection) return;
            const currentNode = selection.focus.getNode();
            setSelection(
              (!currentNode?.getStyle() && label === "left") ||
                currentNode?.getStyle() === label
            );
          });
        }}
      />
    </>
  );
};

Generic.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Generic.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default Generic;
