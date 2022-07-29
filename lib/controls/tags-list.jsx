import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { RichUtils } from "draft-js";
import {
  ArrowIcon,
  COLORS,
  Details,
  ParagraphIcon,
  pxToRem,
  Title1Icon,
  Title2Icon,
  Title3Icon,
  Title4Icon,
  EditorBar,
} from "@kisskissbankbank/kitten";
import { EditorContext, updateEditor } from "../context";

const componentByTagType = (tagType) => {
  switch (tagType) {
    case "header-one":
      return <Title1Icon />;
    case "header-two":
      return <Title2Icon />;
    case "header-three":
      return <Title3Icon />;
    case "header-four":
      return <Title4Icon />;
    case "unstyled":
    default:
      return <ParagraphIcon />;
  }
};

const TagsList = ({ disabled, onChange, tags }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext);
  const currentContent = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const currentBlockType = currentContent
    .getBlockForKey(selection.getStartKey())
    .getType();

  useEffect(() => {
    onChange(currentBlockType);
  }, [currentBlockType]);

  const handleClick = (type) => () => {
    dispatch(updateEditor(RichUtils.toggleBlockType(editorState, type)));
  };

  return (
    <EditorBar.List
      key={currentContent}
      currentIcon={componentByTagType(currentBlockType)}
      disabled={contextDisabled || disabled}
    >
      {tags.map((tag) => {
        const component = componentByTagType(tag);

        if (!component) return;

        return (
          <EditorBar.Item key={tag}
            onClick={handleClick(tag)}
            active={tag === currentBlockType}
          >
            {component}
          </EditorBar.Item>
        );
      })}
    </EditorBar.List>
  );
};

TagsList.propTypes = {
  tags: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

TagsList.defaultProps = {
  tags: ["header-one", "header-two", "header-three", "header-four", "unstyled"],
  disabled: false,
  onChange: () => null,
};

export default TagsList;
