import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextinputGroup = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextinputGroup.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
TextinputGroup.defaultProps = {
  type: "text"
};
export default TextinputGroup;
