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
  BUTTON_STYLE_ICON as ICON,
  buttonModifierStyles as modifierStyles,
  COLORS,
  pxToRem,
} from "@kisskissbankbank/kitten";

export const StyledButton = styled((props) => (
  <KittenButton as="button" type="button" {...props} />
))`
  ${ICON};
  ${modifierStyles("hydrogen")};

  &.Editor__toolbar__button--large {
    width: ${pxToRem(80)};
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

const Button = ({ onToggle, style, active, icon, disabled, className }) => {
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
    >
      <Icon />
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onToggle: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  active: false,
  onToggle: () => null,
};

export default Button;
