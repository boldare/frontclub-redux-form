import React from 'react';

const InputCheckbox = ({
  label,
  input,
}) => (
    <div className="input-wrapper">
      <label>{label}</label>
      <div>
        <input {...input} type='checkbox' />
      </div>
    </div>
  );

export default InputCheckbox
