import React from 'react';

const Input = ({
  input,
  label,
  placeholder,
  type,
  meta: {
    touched,
    error,
    warning
  }
}) => (
    <div className="input-wrapper">
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={placeholder} />
        {
          touched && error && (
            <p className="error">{error}</p>
          )
        }
        {
          touched && warning && (
            <p className="error">{warning}</p>
          )
        }
      </div>
    </div>
  );

export default Input
