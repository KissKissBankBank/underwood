import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { EditorContext, updateDisabled } from "./context";
import Center from "./controls/alignment/center";
import Left from "./controls/alignment/left";
import Right from "./controls/alignment/right";
import Bold from "./controls/bold";
import ButtonLinkControls from "./controls/button-link";
import Image from "./controls/image";
import Italic from "./controls/italic";
import Link from "./controls/link";
import Quote from "./controls/quote";
import TagList from "./controls/tags-list";
import UnorderedList from "./controls/unordered-list";
import Video from "./controls/video";
import { EditorBar, ScrollableContainer } from '@kisskissbankbank/kitten'

const Controls = ({ as, whiteMode, disabled, centered, className, ...props }) => {
  const [, dispatch] = useContext(EditorContext);

  useEffect(() => {
    dispatch(updateDisabled(disabled));
  }, [disabled]);

  return (
    <ScrollableContainer
      shadowColor={`var(--color-grey-${whiteMode ? 0 : 2}00)`}
      as={as}
    >
      <EditorBar
        className={classNames(className, 'k-u-flex-grow-single')}
        theme={whiteMode ? 'white' : 'grey'}
        align={centered ? 'center' : 'start'}
        disabled={disabled}
        {...props}
      />
    </ScrollableContainer>
  );
};

// Controls
Controls.Image = Image;
Controls.TagList = TagList;
Controls.Bold = Bold;
Controls.Italic = Italic;
Controls.Quote = Quote;
Controls.Left = Left;
Controls.Right = Right;
Controls.Center = Center;
Controls.UnorderedList = UnorderedList;
Controls.Link = Link;
Controls.Button = ButtonLinkControls;
Controls.Video = Video;
// Style
Controls.Group = EditorBar.Group;

Controls.propTypes = {
  disabled: PropTypes.bool,
  whiteMode: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
Controls.defaultProps = {
  disabled: false,
  whiteMode: false,
  centered: false,
  as: 'div',
};

export default Controls;
