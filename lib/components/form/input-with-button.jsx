import React from "react";
import PropTypes from "prop-types";
import { TextInputWithButton } from "@kisskissbankbank/kitten";
import { useField } from "formik";

const FormikInputWithButton = ({ name, onClick, isDisabled, ...props }) => {
  const [{ value, ...field }, meta] = useField(name);
  return (
    <>
      <TextInputWithButton
        id={name}
        buttonProps={{
          onClick: onClick,
          disabled: isDisabled || (meta.error && meta.touched),
        }}
        error={meta.error && meta.touched}
        {...field}
        {...props}
      />
    </>
  );
};

FormikInputWithButton.defaultProps = {
  onClick: () => {},
  isDisabled: false,
};
FormikInputWithButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default FormikInputWithButton;
