import React from "react";
import ReactDOM from "react-dom";
import { Editor, Playground, Controls } from "./index";

ReactDOM.render(
  <Editor>
    <Controls>
      <Controls.Group style={{ marginLeft: 20 }}>
        <Controls.TagList tags={["header-two", "header-three", "unstyled"]} />
      </Controls.Group>
      <Controls.Group>
        <Controls.Italic />
        <Controls.Bold />
        <Controls.UnorderedList />
      </Controls.Group>
    </Controls>
    <Playground />
  </Editor>,
  document.getElementById("body")
);
