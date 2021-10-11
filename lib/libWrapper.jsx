import React from "react";
import ReactDOM from "react-dom";
import { Editor, Playground, Controls } from "./index";

ReactDOM.render(
  <Editor>
    <Controls>
      <Controls.Group>
        <Controls.Italic />
      </Controls.Group>
    </Controls>
    <Playground />
  </Editor>,
  document.getElementById("body")
);
