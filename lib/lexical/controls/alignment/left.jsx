import PropTypes from "prop-types";
import React from "react";
import Generic from "./generic";

const Left = (props) => {
  return <Generic label="left" {...props} />;
};

Left.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Left.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default Left;
