import React, { useContext, useEffect, useRef } from "react";
import { convertToRaw, Editor as DraftEditor, EditorState } from "draft-js";
import { COLORS, Paragraph, pxToRem } from "@kisskissbankbank/kitten";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {
  EditorContext,
  setFocus,
  updateEditor,
  updateEditorRef,
} from "./context";
import { getEditorValue, resetEditor } from "./utils";
import { EditorStyle, styleBlock } from "./style";
import classNames from "classnames";
import keyCommandHandler from "./handlers/key-command";
import returnHandler from "./handlers/return";
import { customBlockRenderMap } from "./block-render-map";

const Wrapper = styled.div`
  border: 0.125rem solid ${COLORS.line1};
  padding: ${pxToRem(15)};
  ${(props) =>
    props.hasError &&
    css`
      border-color: ${COLORS.error3};
    `};
  ${(props) =>
    props.focused &&
    !props.hasError &&
    css`
      border-color: ${COLORS.line2};
    `};
  ${({ withoutBorder }) =>
    withoutBorder &&
    css`
      border: none;
      padding: 0;
    `}
  ${({ variant }) =>
    variant === "orion" &&
    css`
      border-radius: 0.25rem;
    `}
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
  variant,
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
  return (
    <Wrapper
      variant={variant}
      hasError={hasError}
      focused={focus}
      withoutBorder={withoutBorder}
    >
      <EditorStyle />
      <Paragraph
        data-test-id={props["data-test-id"]}
        tag="section"
        modifier="tertiary"
        noMargin
        withoutBorder={withoutBorder}
        className={classNames("k-Editor__root", {
          "k-Editor__compact": compact,
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
  variant: PropTypes.string,
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
  variant: "",
};

export default Playground;
