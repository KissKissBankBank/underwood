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
import { EditorBar } from '@kisskissbankbank/kitten'

const Controls = ({ whiteMode, disabled, centered, ...props }) => {
  const [, dispatch] = useContext(EditorContext);

  useEffect(() => {
    dispatch(updateDisabled(disabled));
  }, [disabled]);

  return (
    <EditorBar
      theme={whiteMode ? 'white' : 'grey'}
      align={centered ? 'center' : 'start'}
      disabled={disabled}
      {...props}
    />
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
};
Controls.defaultProps = {
  disabled: false,
  whiteMode: false,
  centered: false,
};

export default Controls;
