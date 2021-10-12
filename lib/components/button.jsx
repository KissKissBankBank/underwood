import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";
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
import {
  Button as KittenButton,
  buttonModifierStyles as modifierStyles,
  COLORS,
  pxToRem,
} from "@kisskissbankbank/kitten";

export const StyledButton = styled(KittenButton)`
  ${modifierStyles("hydrogen")};

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

  // Lithium modifier.
  &.Editor__toolbar__button--isSelected,
  :hover,
  :focus {
    border-color: ${COLORS.primary4};
    background-color: ${COLORS.background1};
    color: ${COLORS.primary1};

    svg,
    path {
      fill: ${COLORS.primary1};
    }
  }

  :disabled {
    border-color: ${COLORS.line2};
    background-color: ${COLORS.line2};
    color: ${COLORS.background1};

    svg,
    path {
      fill: ${COLORS.background1};
      pointer-events: none;
    }
  }
`;

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
  className
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
    <StyledButton
      disabled={disabled}
      className={classNames(className, {
        "Editor__toolbar__button--isSelected": active && focus,
      })}
      onMouseDown={handleMouseDown}
      title={title}
      aria-label={title}
      fit="icon"
      tag={tag}
      type={tag === 'button' ? tag : null}
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
  tag: 'button',
};

export default Button;
