import { COLORS, pxToRem, TYPOGRAPHY } from "@kisskissbankbank/kitten";
import styled from "styled-components";

export const EditorStyle = styled.div`
  > div {
    //padding: ${pxToRem(15)};
    cursor: text;
  }

  position: relative;
  width: auto;
  ${TYPOGRAPHY.fontStyles.light};
  color: ${COLORS.font1};
  letter-spacing: 0;
  font-size: ${pxToRem(20)};

  &.u-Editor--hasBorder {
    border: var(--border);
    border-radius: var(--border-radius-s);
    padding: ${pxToRem(15)};

    &.u-Editor--focused,
    &:focus-within {
      border: var(--border-active);
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &.u-Editor--hasError {
      border: var(--border-danger);
    }
  }

  .u-media-focus {
    padding: ${pxToRem(2)};
    border: ${pxToRem(4)} solid ${COLORS.background1};
    cursor: pointer;
    transition: all ease-in-out 100ms;
    > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  .u_image,
  .u-media {
    margin: ${pxToRem(34)} auto;
    display: flex;
    justify-content: center;

    img {
      display: block;
    }
  }

  .u-image-focus {
    width: fit-content;
    padding: ${pxToRem(2)};
    border: ${pxToRem(4)} solid ${COLORS.background1};
    cursor: pointer;
    transition: all ease-in-out 100ms;
  }

  .u-image-focus:hover,
  .u-media-focus:hover {
    border-color: ${COLORS.primary4};
  }

  .u-image-focus__focused,
  .u-media-focus__focused {
    border-color: ${COLORS.primary1} !important;
    caret-color: transparent;
  }

  .editor-paragraph {
    margin: 0;
  }

  .editor-placeholder {
    position: absolute;
    top: ${pxToRem(15)};
    z-index: -1;
  }

  .public-DraftEditor-content {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(32)};
  }

  .DraftEditor-editorContainer {
    ${TYPOGRAPHY.fontStyles.light};
    color: ${COLORS.font1};

    .public-DraftStyleDefault-ul {
      margin-top: ${pxToRem(10)};
      margin-bottom: ${pxToRem(10)};
      list-style: disc;

      .public-DraftStyleDefault-unorderedListItem {
        margin-left: ${pxToRem(20)};
      }
    }

    .kiss-Draft__image-read,
    .kiss-Draft__media-read {
      margin: ${pxToRem(40)} auto;
    }

    .kiss-Draft__media-focus {
      padding: ${pxToRem(2)};
      border: ${pxToRem(4)} solid ${COLORS.background1};
      cursor: pointer;
      transition: all ease-in-out 100ms;
      > iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }

    .kiss-Draft__image-focus {
      width: fit-content;
      padding: ${pxToRem(2)};
      border: ${pxToRem(4)} solid ${COLORS.background1};
      cursor: pointer;
      transition: all ease-in-out 100ms;
    }

    .kiss-Draft__image-focus:hover,
    .kiss-Draft__media-focus:hover {
      border-color: ${COLORS.primary4};
    }

    .kiss-Draft__image-focus__focused,
    .kiss-Draft__media-focus__focused {
      border-color: ${COLORS.primary1} !important;
      caret-color: transparent;
    }

    blockquote {
      font-style: italic;
      padding-left: ${pxToRem(15)};
      margin-left: ${pxToRem(50)};
      margin-top: ${pxToRem(20)};
      margin-bottom: ${pxToRem(20)};
      border-left: ${pxToRem(3)} solid ${COLORS.line1};
    }
  }

  .DraftEditor-editorContainer__disabled {
    color: ${COLORS.font2};
    cursor: not-allowed;

    a {
      color: ${COLORS.line2};
      &:hover,
      &:focus {
        color: ${COLORS.line2};
      }
    }
  }

  .DraftEditor-editorContainer__no-richText {
    font-size: ${pxToRem(14)};
  }

  .DraftEditor-editorContainer__compact {
    line-height: ${pxToRem(20)};
  }

  li.DraftEditor-editorContainer__compact,
  li.DraftEditor-editorContainer__richText {
    .public-DraftStyleDefault-block {
      margin: 0;
    }
  }

  .u-Editor__compact,
  .u-Editor__root {
    .public-DraftStyleDefault-ul {
      margin: 0;
    }
  }

  .public-DraftStyleDefault-block {
    margin: ${pxToRem(10)} auto;
  }
`;
