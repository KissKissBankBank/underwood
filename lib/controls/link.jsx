import { Modal, pxToRem, Button } from "@kisskissbankbank/kitten";
import { EditorState, Modifier, RichUtils } from "draft-js";
import { Formik } from "formik";
import linkifyIt from "linkify-it";
import isEmtpy from "lodash/fp/isEmpty";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import tlds from "tlds";
import ButtonEditor from "../components/button";
import { InputText, Label } from "../components/form";
import { EditorContext, updateEditor } from "../context";
import {
  getCurrentSelection,
  getEntity,
  getEntityKey,
  getEntityText,
  getImageUrl,
  hasEntityFocus,
} from "../utils";
import LinkInline from "./link-inline";
import LinkModal from "./link-modal";

const linkify = linkifyIt();
linkify.tlds(tlds);

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Link = ({ contentState, entityKey, children }) => {
  const [isVisible, setVisible] = useState(false);
  const { url } = contentState.getEntity(entityKey).getData();
  const [{ editorState, focus }, dispatch] = useContext(EditorContext);
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey);
  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0);
  }, [focus, editorState]);
  return (
    <Wrapper aria-live="assertive">
      <a
        href={url}
        target="_blank"
        className="k-u-link k-u-link-primary1"
        rel="nofollow noopener"
      >
        {children}
      </a>
      {isVisible && (
        <LinkInline
          url={url}
          onDelete={() => {
            const currentContent = contentState?.getBlockForKey(
              editorState?.getSelection()?.getFocusKey()
            );
            if (!currentContent) return;
            currentContent.findEntityRanges(
              (character) => {
                return character.getEntity() === entityKey;
              },
              (start, end) => {
                const newsSelection = editorState.getSelection().merge({
                  focusOffset: end,
                  anchorOffset: start,
                });
                const newsEditorState = Modifier.applyEntity(
                  contentState,
                  newsSelection,
                  null
                );
                dispatch(
                  updateEditor(
                    EditorState.push(
                      editorState,
                      newsEditorState,
                      "apply-entity"
                    )
                  )
                );
              }
            );
          }}
        />
      )}
    </Wrapper>
  );
};

const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

export const decorator = {
  strategy: linkStrategy,
  component: Link,
};

export const readDecorator = {
  strategy: linkStrategy,
  component: (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData();
    return (
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener"
        className="k-u-link k-u-link-primary1"
      >
        {props.children}
      </a>
    );
  },
};

const LinkControls = ({ disabled, onChange }) => {
  const [modalOpened, openModal] = useState(false);
  const [
    { editorState, editorRef, translations, disabled: contextDisabled },
    dispatch,
  ] = useContext(EditorContext);
  const entity = getEntity(editorState);
  const entityKey = getEntityKey(editorState);
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState);
    }
    return getEntityText(editorState, entityKey);
  };
  const forceFocus = () => {
    const currentSelection = editorState.getSelection();
    setTimeout(() => editorRef.current.focus(), 0);
    const newSelectionAtTheEnd = currentSelection.merge({
      anchorOffset: currentSelection.getFocusOffset(),
      hasFocus: true,
    });
    dispatch(
      updateEditor(
        EditorState.forceSelection(editorState, newSelectionAtTheEnd)
      )
    );
  };
  const active =
    !contextDisabled && !disabled && (entity || !isEmtpy(textToShow()));
  return (
    <>
      <ButtonEditor
        icon="link"
        disabled={!active}
        onToggle={() => {
          if (modalOpened) {
            openModal(false);
          } else {
            openModal(true);
          }
        }}
      />
      <LinkModal
        onClose={() => {
          openModal(false);
          forceFocus();
        }}
        isOpen={modalOpened}
        onChange={onChange}
      />
    </>
  );
};

LinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

LinkControls.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default LinkControls;
