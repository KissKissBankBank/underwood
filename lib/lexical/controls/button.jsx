import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BlockquoteIcon,
  BoldIcon,
  Button as KittenButton,
  EditorButtonIcon as ButtonIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  pxToRem,
  VideoIcon,
} from "@kisskissbankbank/kitten";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from "styled-components";
import { EditorContext } from "../context";

export const StyledButton = styled(KittenButton)`
  &.Editor__toolbar__button--large {
    width: ${pxToRem(80)};
  }

  &:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &[aria-checked="true"] {
    z-index: 2;
    position: relative;
  }
`;

const iconComponents = {
  format_bold: BoldIcon,
  format_italic: ItalicIcon,
  format_list_bulleted: ListIcon,
  left: AlignLeftIcon,
  center: AlignCenterIcon,
  right: AlignRightIcon,
  image: ImageIcon,
  video: VideoIcon,
  link: LinkIcon,
  button_link: ButtonIcon,
  quote: BlockquoteIcon,
};

const Button = ({ tag, onClick, active, icon, disabled }) => {
  const [{ translations }] = useContext(EditorContext);
  const Icon = iconComponents[icon];
  const title = translations?.controls[active ? `activated_${icon}` : icon];

  return (
    <StyledButton
      disabled={disabled}
      active={active}
      aria-checked={active}
      onClick={onClick}
      title={title}
      aria-label={title}
      fit="icon"
      tag={tag}
      type={tag === "button" ? tag : null}
    >
      <Icon />
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onToggle: PropTypes.func,
  tag: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  active: false,
  onToggle: () => null,
  tag: "button",
};

export default Button;
