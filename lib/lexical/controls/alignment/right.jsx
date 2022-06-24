import PropTypes from "prop-types";
import React from "react";
import Generic from "./generic";

const Right = (props) => {
  return <Generic label="right" {...props} />;
};

Right.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Right.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default Right;
