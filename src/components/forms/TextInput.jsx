import React from "react";
import PropTypes from "prop-types";

export const TextInput = ({
  type,
  name,
  label,
  handleInputChange,
  inputValue,
  errorMsg,
}) => {
  return (
    <div className={`form-group ${errorMsg !== undefined ? "invalid" : ""}`}>
      <input
        type={type}
        name={name}
        className="auth__input"
        placeholder=" "
        onChange={handleInputChange}
        value={inputValue}
      />

      <label htmlFor="input" className="control-label">
        {label}
      </label>
      <i className="bar"></i>

      {errorMsg?.length !== 0 && (
        <small className="error-msg">{errorMsg}</small>
      )}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
};
