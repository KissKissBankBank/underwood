import React, { useContext } from "react";
import {
  DropdownMenu,
  LinkIconNext,
  CrossIconNext,
} from "@kisskissbankbank/kitten";
import styled from "styled-components";
import { EditorContext } from "../context";

const LinkInline = ({ onDelete, url }) => {
  const [{ translations }] = useContext(EditorContext);
  return (
    <DropdownMenu contentEditable={false} open menuPosition="right" className="u-Draft__link_menu">
      <DropdownMenu.Link
        icon={<LinkIconNext />}
        href={url}
        target="_blank"
        rel="noopener"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(url, "_blank").focus();
        }}
      >
        {url}
      </DropdownMenu.Link>
      <DropdownMenu.Button
        icon={<CrossIconNext />}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(e);
        }}
      >
        {translations.link.button.delete}
      </DropdownMenu.Button>
    </DropdownMenu>
  );
};

export default LinkInline;
