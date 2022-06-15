import React from "react";
import { createRoot } from "react-dom/client";
import { EditorProvider } from "./context";
import { Controls, Editor, Playground } from "./index";
import "./style.scss";

const EditorDev = () => {
  return (
    <Editor>
      <Controls>
        <Controls.Group style={{ marginLeft: 20 }}>
          <Controls.Italic />
        </Controls.Group>
      </Controls>
      <Playground />
    </Editor>
  );
};

const container = document.getElementById("body");
const root = createRoot(container);
root.render(
  <EditorProvider>
    <EditorDev />
  </EditorProvider>
);
