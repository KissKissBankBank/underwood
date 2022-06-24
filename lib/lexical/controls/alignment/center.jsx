import PropTypes from "prop-types";
import React from "react";
import Generic from "./generic";

const Center = (props) => {
  return <Generic label="center" {...props} />;
};

Center.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Center.defaultProps = {
  disabled: false,
  onChange: () => null,
};

export default Center;
