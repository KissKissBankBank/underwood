import "./style.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor, Playground, Controls, Displayer } from "./index";

const EditorDev = () => {
  const [body, setBody] = useState(
    JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()))
  );
  return (
    <>
      <Editor>
        <Controls>
          <Controls.Group style={{ marginLeft: 20 }}>
            <Controls.TagList
              tags={["header-two", "header-three", "unstyled"]}
            />
          </Controls.Group>
          <Controls.Group>
            <Controls.Italic />
            <Controls.Bold />
            <Controls.UnorderedList />
          </Controls.Group>
          <Controls.Group>
            <Controls.Video embedlyApiKey="8b7d8dd6504d41af9a77662672aabc2a" />
          </Controls.Group>
        </Controls>
        <Playground
          className="k-u-margin-top-double"
          onChange={(text) => {
            setBody(JSON.stringify(text));
          }}
        />
      </Editor>
      <Displayer text={body} />
    </>
  );
};

ReactDOM.render(<EditorDev />, document.getElementById("body"));
