import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Container } from "@kisskissbankbank/kitten";
import Layout from "@theme/Layout";
import { convertToRaw, EditorState } from "draft-js";
import React, { useState } from "react";
import {
  Controls,
  Displayer,
  Editor,
  Playground as UnderwoodPlayground,
} from "../../lib";

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
            <Controls.Image onUpload={console.log} />
            <Controls.Video embedlyApiKey="8b7d8dd6504d41af9a77662672aabc2a" />
          </Controls.Group>
        </Controls>
        <UnderwoodPlayground
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

const Playground = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Underwood playground"
    >
      <Container>
        <EditorDev />
      </Container>
    </Layout>
  );
};

export default Playground;
