import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@kisskissbankbank/kitten";
import { Editor, Controls, Playground } from "@kisskissbankbank/underwood";

const Index = () => {
  return (
    <Container>
      <Editor>
        <Controls>
          <Controls.Group>
            <Controls.Italic />
            <Controls.Bold />
          </Controls.Group>
          <Controls.Group>
            <Controls.Video embedlyApiKey="8b7d8dd6504d41af9a77662672aabc2a" />
          </Controls.Group>
        </Controls>
        <Playground />
      </Editor>
    </Container>
  );
};

ReactDOM.render(<Index />, document.getElementById("body"));
