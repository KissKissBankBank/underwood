import { convertToRaw, EditorState } from "draft-js";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Controls, Displayer, Editor, Playground } from "./index";
import "./style.scss";

const EditorDev = () => {
  const [body, setBody] = useState(
    JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()))
  );
  return (
    <>
      <Editor>
        <Controls>
          <Controls.Group>
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
            <Controls.Link />
            <Controls.Button />
          </Controls.Group>
          <Controls.Group>
            <Controls.Left />
            <Controls.Center />
            <Controls.Right />
          </Controls.Group>
          <Controls.Group>
            <Controls.Image onUpload={console.log} />
            <Controls.Video embedlyApiKey="8b7d8dd6504d41af9a77662672aabc2a" />
          </Controls.Group>
        </Controls>
        <Playground
          className="k-u-margin-top-double"
          onChange={(text) => {
            console.log(text);
            setBody(JSON.stringify(text));
          }}
        />
      </Editor>
      <Displayer text={body} />
    </>
  );
};

ReactDOM.render(<EditorDev />, document.getElementById("body"));
