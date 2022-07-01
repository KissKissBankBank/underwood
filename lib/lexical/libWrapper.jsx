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
          <Controls.TagList tags={["h1", "h2", "paragraph"]} />
        </Controls.Group>
        <Controls.Group>
          <Controls.Italic />
          <Controls.Bold />
        </Controls.Group>
        <Controls.Group>
          <Controls.Left />
          <Controls.Center />
          <Controls.Right />
        </Controls.Group>
        <Controls.Group>
          <Controls.Media embedlyApiKey="8b7d8dd6504d41af9a77662672aabc2a" />
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
