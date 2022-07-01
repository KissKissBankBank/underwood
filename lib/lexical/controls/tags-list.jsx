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
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, $isHeadingNode } from "@lexical/rich-text";
import { $wrapLeafNodesInElements } from "@lexical/selection";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { StyledButton } from "./button";

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
    case "h1":
      return <Title1Icon />;
    case "h2":
      return <Title2Icon />;
    case "h3":
      return <Title3Icon />;
    case "h4":
      return <Title4Icon />;
    case "paragraph":
    default:
      return <ParagraphIcon />;
  }
};

const TagsList = ({ disabled, tags, onChange }) => {
  const [editor] = useLexicalComposerContext();
  const [currentSelection, setCurrentSelectionTag] = useState("paragraph");

  useEffect(() => {
    onChange(currentSelection);
  }, [currentSelection]);

  useEffect(() => {
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        const anchorNode = selection.anchor.getNode();
        const element =
          anchorNode.getKey() === "root"
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();
        if ($isHeadingNode(element)) {
          setCurrentSelectionTag(element.getTag());
        } else {
          setCurrentSelectionTag("paragraph");
        }
      });
    });
  }, []);

  return (
    <>
      <Wrapper
        key={currentSelection}
        summaryRender={({ open }) => (
          <StyledButton
            className="Editor__toolbar__tagListToggle__button"
            tabIndex="-1"
            disabled={disabled}
            fit="icon"
            tag="span"
            active={open}
          >
            {componentByTagType(currentSelection)}
            <ArrowIcon width="6" direction={open ? "top" : "bottom"} />
          </StyledButton>
        )}
        summaryProps={{ className: "Editor__toolbar__tagListToggle" }}
        disabled={disabled}
      >
        <ul className="Editor__toolbar__tagsList">
          {tags.map((tag) => {
            const component = componentByTagType(tag);

            if (!component) return;

            return (
              <li key={tag}>
                <button
                  onClick={() => {
                    editor.update(() => {
                      const selection = $getSelection();
                      if ($isRangeSelection(selection)) {
                        $wrapLeafNodesInElements(selection, () => {
                          if (tag === "paragraph")
                            return $createParagraphNode();
                          return $createHeadingNode(tag);
                        });
                      }
                    });
                  }}
                  type="button"
                  aria-selected={tag === currentSelection}
                  className="Editor__toolbar__tagsList__Item"
                >
                  {component}
                </button>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
};

TagsList.propTypes = {
  tags: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

TagsList.defaultProps = {
  tags: ["h1", "h2", "h3", "h4", "paragraph"],
  disabled: false,
  onChange: () => null,
};

export default TagsList;
