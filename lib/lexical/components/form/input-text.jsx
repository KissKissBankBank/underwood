import { Field } from "@kisskissbankbank/kitten";
import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const InputText = ({
  name,
  form,
  placeholder,
  limit,
  unit,
  type,
  digits,
  disabled,
  rows,
  defaultValue,
  style,
  className,
  onFocus,
  onChange,
  onBlur,
  normalize,
  validate,
  ...others
}) => {
  const [field, meta, { setValue }] = useField({ name, validate });

  useEffect(() => {
    if (!defaultValue) return;
    if (field.value) return;

    setValue(defaultValue);
  }, []);

  return (
    <>
      <div style={style} className={className}>
        <Field.Input
          {...field}
          id={name}
          error={meta.error && meta.touched}
          onFocus={onFocus}
          onChange={(e) => {
            field.onChange(e);
            if (normalize) {
              setValue(normalize(e.target.value));
            }
            onChange(e);
          }}
          onBlur={(e) => {
            field.onBlur(e);
            if (normalize) {
              setValue(normalize(e.target.value));
            }
            onBlur(e);
          }}
          data-test-id={name}
          placeholder={placeholder}
          limit={limit}
          unit={unit}
          type={type}
          tag={type}
          rows={rows}
          digits={digits}
          disabled={disabled}
          {...others}
        />
      </div>

      <ErrorMessage name={name}>
        {(msg) => <Field.ErrorMessage>{msg}</Field.ErrorMessage>}
      </ErrorMessage>
    </>
  );
};

InputText.defaultProps = {
  type: "input",
  disabled: false,
  validate: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
  type: PropTypes.string,
  digits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  normalize: PropTypes.func,
};

export default InputText;
