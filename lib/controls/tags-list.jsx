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
} from "@kisskissbankbank/kitten";
import { EditorContext, updateEditor } from "../context";
import { StyledButton } from "../components/button";

const List = styled.ul`
  position: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  width: ${pxToRem(75)};
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: ${pxToRem(2)} solid ${COLORS.line1};

  .Editor__toolbar__tagsList__Item {
    width: 100%;
    position: relative;
    padding: ${pxToRem(15)} ${pxToRem(20)};
    background-color: ${COLORS.background1};
    border: none;
    border-left: ${pxToRem(2)} solid ${COLORS.line1};
    border-right: ${pxToRem(2)} solid ${COLORS.line1};
    text-align: left;
    cursor: pointer;

    appareance: none;
    box-sizing: border-box;

    &:hover,
    &:focus {
      background-color: ${COLORS.background3};
    }

    &:focus {
      z-index: 3;
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }

    &[aria-selected="true"] {
      svg,
      path {
        fill: ${COLORS.primary1};
      }
    }
  }
`;

const StyledDetails = styled(Details)`
  summary.Editor__toolbar__tagListToggle {
    border-radius: ${pxToRem(8)};

    .Editor__toolbar__tagListToggle__button {
      pointer-events: none;
      width: ${pxToRem(75)};
    }

    &:focus {
      z-index: 3;
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};

      .Editor__toolbar__tagListToggle__button {
        border-color: ${COLORS.primary4};
        background-color: ${COLORS.background1};
        color: ${COLORS.primary1};

        svg,
        path {
          fill: ${COLORS.primary1};
        }
      }
    }
  }

  &[open] {
    summary.Editor__toolbar__tagListToggle {
      .Editor__toolbar__tagListToggle__button {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
    `}
`;

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
    <StyledDetails
      key={currentContent}
      summaryRender={({ open }) => (
        <StyledButton
          className="Editor__toolbar__tagListToggle__button"
          tabIndex="-1"
          disabled={contextDisabled || disabled}
          fit="icon"
          tag="span"
        >
          {componentByTagType(currentBlockType)}
          <ArrowIcon width="6" direction={open ? "top" : "bottom"} />
        </StyledButton>
      )}
      summaryProps={{ className: "Editor__toolbar__tagListToggle" }}
      disabled={contextDisabled || disabled}
    >
      <List>
        {tags.map((tag) => {
          const component = componentByTagType(tag);

          if (!component) return;

          return (
            <li key={tag}>
              <button
                onClick={handleClick(tag)}
                type="button"
                aria-selected={tag === currentBlockType}
                className="Editor__toolbar__tagsList__Item"
              >
                {component}
              </button>
            </li>
          );
        })}
      </List>
    </StyledDetails>
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
