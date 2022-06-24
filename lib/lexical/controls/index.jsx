import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { EditorContext, updateDisabled } from "../context";
import Actions from "./actions";
import Center from "./alignment/center";
import Left from "./alignment/left";
import Right from "./alignment/right";
import Bold from "./bold";
import Italic from "./italic";
import Toolbar from "./toolbar";

const Controls = ({ whiteMode, disabled, className, centered, children }) => {
  const [, dispatch] = useContext(EditorContext);

  useEffect(() => {
    dispatch(updateDisabled(disabled));
  }, [disabled]);

  return (
    <Toolbar
      className={classNames(className, {
        "Editor-Toolbar__whiteMode": whiteMode,
        "Editor-Toolbar__centered": centered,
      })}
    >
      {children}
    </Toolbar>
  );
};

// Controls
Controls.Italic = Italic;
Controls.Bold = Bold;
Controls.Left = Left;
Controls.Right = Right;
Controls.Center = Center;
// Style
Controls.Group = Actions;

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
