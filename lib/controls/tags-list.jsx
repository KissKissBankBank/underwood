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

const Wrapper = styled(Details)`
  summary.Editor__toolbar__tagListToggle {
    border-radius: ${pxToRem(8)};

    .Editor__toolbar__tagListToggle__button {
      pointer-events: none;
      width: ${pxToRem(75)};
    }

    &:focus {
      z-index: 3;
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

  .Editor__toolbar__tagsList {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: ${pxToRem(75)};
    list-style: none;
    margin: 0;
    padding: 0;

    & li:last-child .Editor__toolbar__tagsList__Item {
      border-bottom: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
    }

    .Editor__toolbar__tagsList__Item {
      width: 100%;
      position: relative;
      padding: ${pxToRem(15)} ${pxToRem(20)};
      background-color: var(--color-grey-000);
      border: ${pxToRem(1)} solid transparent;
      border-left: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
      border-right: var(--border, ${pxToRem(1)} solid ${COLORS.line1});
      text-align: left;
      cursor: pointer;
      transition: border var(--transition), background-color var(--transition);

      appareance: none;
      box-sizing: border-box;

      &:hover,
      &:focus {
        background-color: var(--color-primary-100);
        border-color: var(--color-primary-700) !important;
      }

      &:focus {
        z-index: 3;
      }

      &[aria-selected="true"] {
        svg,
        path {
          fill: ${COLORS.primary1};
        }
      }

    }

  }
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
    <Wrapper
      key={currentContent}
      summaryRender={({ open }) => (
        <StyledButton
          className="Editor__toolbar__tagListToggle__button"
          tabIndex="-1"
          disabled={contextDisabled || disabled}
          fit="icon"
          tag="span"
          active={open}
        >
          {componentByTagType(currentBlockType)}
          <ArrowIcon width="6" direction={open ? "top" : "bottom"} />
        </StyledButton>
      )}
      summaryProps={{ className: "Editor__toolbar__tagListToggle" }}
      disabled={contextDisabled || disabled}
    >
      <ul className="Editor__toolbar__tagsList">
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
      </ul>
    </Wrapper>
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
