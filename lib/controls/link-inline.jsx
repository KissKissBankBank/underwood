import React, { useContext } from "react";
import {
  ArrowContainer,
  COLORS,
  pxToRem,
  Text,
} from "@kisskissbankbank/kitten";
import styled from "styled-components";
import { EditorContext } from "../context";

const Wrapper = styled(ArrowContainer)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${pxToRem(20)};
  background-color: ${COLORS.background1};
  margin-top: ${pxToRem(0)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
  z-index: 99999;

  .u-link-delete {
    flex: 1 0 auto;
    text-align: center;
    display: block;
  }
  .u-link-separator {
    flex: 0 0 auto;
    border: none;
    border-left: var(--border);
    margin: ${pxToRem(5)} ${pxToRem(10)};
  }
  .u-link-visit {
    flex: 2 0 auto;
    max-width: ${pxToRem(240)};
  }
`;
const LinkInline = ({ onDelete, url }) => {
  const [{ translations }] = useContext(EditorContext);
  return (
    <Wrapper
      position="top"
      shadow
      borderWidth={1}
      contentEditable={false}
      borderColor="var(--color-grey-400)"
      color="var(--color-grey-000)"
      borderRadius={4}
    >
      <Text
        className="u-link u-link-delete k-u-reset-button"
        weight="regular"
        tag="button"
        type="button"
        color="error"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(e);
        }}
      >
        {translations.link.button.delete}
      </Text>
      <hr className="u-link-separator" />
      <Text
        className="u-link u-link-visit k-u-ellipsis k-u-link"
        weight="regular"
        href={url}
        target="_blank"
        rel="noopener"
        tag="a"
        color="font1"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(url, "_blank").focus();
        }}
      >
        {url}
      </Text>
    </Wrapper>
  );
};

export default LinkInline;
