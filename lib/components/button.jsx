import React, { useContext } from "react";
import PropTypes from "prop-types";
import { EditorContext } from "../context";
import {
  BoldIcon,
  ItalicIcon,
  BlockquoteIcon,
  ListIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  ImageIcon,
  VideoIcon,
  LinkIcon,
  ButtonIcon,
} from "../controls/icons";
import { EditorBar } from "@kisskissbankbank/kitten";

const iconComponents = {
  format_bold: BoldIcon,
  format_italic: ItalicIcon,
  format_list_bulleted: ListIcon,
  ["k-u-align-left"]: AlignLeftIcon,
  ["k-u-align-center"]: AlignCenterIcon,
  ["k-u-align-right"]: AlignRightIcon,
  image: ImageIcon,
  video: VideoIcon,
  link: LinkIcon,
  button_link: ButtonIcon,
  quote: BlockquoteIcon,
};

const Button = ({
  tag,
  onToggle,
  style,
  active,
  icon,
  disabled,
}) => {
  const [{ focus, translations }] = useContext(EditorContext);
  const Icon = iconComponents[icon];
  const title = translations?.controls[active ? `activated_${icon}` : icon];

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (disabled) return;
    onToggle(style);
  };

  return (
    <EditorBar.Button
      disabled={disabled}
      active={active && focus}
      onMouseDown={handleMouseDown}
      title={title}
      aria-label={title}
      as={tag}
    >
      <Icon />
    </EditorBar.Button>
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
  tag: 'button',
};

export default Button;
