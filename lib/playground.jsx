import { COLORS, Paragraph, pxToRem } from "@kisskissbankbank/kitten";
import classNames from "classnames";
import { convertToRaw, Editor as DraftEditor, EditorState } from "draft-js";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import {
  EditorContext,
  setFocus,
  updateEditor,
  updateEditorRef,
} from "./context";
import { getEditorValue, resetEditor } from "./utils";
import { EditorStyle, styleBlock } from "./style";
import keyCommandHandler from "./handlers/key-command";
import returnHandler from "./handlers/return";
import { customBlockRenderMap } from "./block-render-map";

const Wrapper = styled.div`
  border-radius: var(--border-radius-s);
  cursor: text;

  &.u-Editor--hasBorder {
    border: var(--border);
    padding: ${pxToRem(15)};

    &.u-Editor--focused, &:focus-within {
      border: var(--border-active);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &.u-Editor--hasError {
      border: var(--border-danger);
    }
  }
`;

const Playground = ({
  className,
  hasError,
  onFocus,
  onBlur,
  rawValue,
  initialValue,
  placeholder,
  withoutBorder,
  useRichTextStyle,
  isDisabled,
  compact,
  ...props
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const playgroundRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ editorState, focus }, dispatch] = useContext(EditorContext);

  const onChange = (editorState) => dispatch(updateEditor(editorState));

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    props.onChange(
      rawValue
        ? convertToRaw(editorState.getCurrentContent())
        : editorState.getCurrentContent()
    );
  }, [editorState]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(updateEditorRef(playgroundRef));
  }, [playgroundRef]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    onChange(resetEditor(getEditorValue(initialValue)));
  }, [initialValue]);

  const handleWrapperClick = (event) => {
    if (!playgroundRef?.current) return;

    playgroundRef.current.focus();
  }

  return (
    <Wrapper
      className={classNames(
        "u-Editor",
        className,
        {
          "u-Editor--hasError": hasError,
          "u-Editor--focused": focus,
          "u-Editor--hasBorder": !withoutBorder,
        }
      )}
      onClick={handleWrapperClick}
    >
      <EditorStyle />
      <Paragraph
        data-test-id={props["data-test-id"]}
        tag="section"
        modifier="tertiary"
        noMargin
        className={classNames("u-Editor__root", {
          "u-Editor__compact": compact,
        })}
      >
        <DraftEditor
          ref={playgroundRef}
          editorState={editorState}
          placeholder={placeholder}
          readOnly={isDisabled}
          handleKeyCommand={keyCommandHandler(onChange)}
          handleReturn={returnHandler(onChange)}
          onChange={onChange}
          onFocus={() => {
            dispatch(setFocus(true));
            onFocus();
          }}
          onBlur={() => {
            dispatch(setFocus(false));
            onBlur();
          }}
          blockStyleFn={styleBlock({ isDisabled, useRichTextStyle, compact })}
          blockRenderMap={customBlockRenderMap}
        />
      </Paragraph>
    </Wrapper>
  );
};

Playground.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInit: PropTypes.func,
  hasError: PropTypes.bool,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rawValue: PropTypes.bool,
  placeholder: PropTypes.string,
  withoutBorder: PropTypes.bool,
  useRichTextStyle: PropTypes.bool,
  isDisabled: PropTypes.bool,
  compact: PropTypes.bool,
};
Playground.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  hasError: false,
  initialValue: EditorState.createEmpty(),
  rawValue: true,
  placeholder: "",
  withoutBorder: false,
  useRichTextStyle: false,
  isDisabled: false,
  compact: false,
};

export default Playground;
