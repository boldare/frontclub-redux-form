import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import { FormControlLabel } from 'material-ui/Form';

const InputCheckbox = ({
  label,
  input,
}) => (
    <FormControlLabel
      control={
        <Checkbox
          // value="checkedA"
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  );

export default InputCheckbox
