import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";
import * as React from "react";
import { createGlobalStyle } from "styled-components";

const TreeViewStyles = createGlobalStyle`
  .tree-view-output {
    display: block;
    background: #222;
    color: #fff;
    padding: 0;
    font-size: 12px;
    white-space: pre-wrap;
    margin: 1px auto 10px auto;
    max-height: 250px;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }

  .debug-timetravel-panel {
    overflow: hidden;
    padding: 0 0 10px 0;
    margin: auto;
    display: flex;
  }

  .debug-timetravel-panel-slider {
    padding: 0;
    flex: 8;
  }

  .debug-timetravel-panel-button {
    padding: 0;
    border: 0;
    background: none;
    flex: 1;
    color: #fff;
    font-size: 12px;
  }

  .debug-timetravel-panel-button:hover {
    text-decoration: underline;
  }

  .debug-timetravel-button {
    border: 0;
    padding: 0;
    font-size: 12px;
    top: 10px;
    right: 15px;
    position: absolute;
    background: none;
    color: #fff;
  }

  .debug-timetravel-button:hover {
    text-decoration: underline;
  }
`;

export default function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();
  return (
    <>
      <TreeViewStyles />
      <TreeView
        viewClassName="tree-view-output"
        timeTravelPanelClassName="debug-timetravel-panel"
        timeTravelButtonClassName="debug-timetravel-button"
        timeTravelPanelSliderClassName="debug-timetravel-panel-slider"
        timeTravelPanelButtonClassName="debug-timetravel-panel-button"
        editor={editor}
      />
    </>
  );
}
