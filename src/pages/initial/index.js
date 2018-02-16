import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'
import InputCheckbox from '../../components/InputCheckbox'
import FormButtons from '../../components/FormButtons'

const USER_DATA = {
  firstName: 'Michal',
  age: 24,
}

const InitialValues = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  return (
    <div>
      <h2>Bro's order</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component={Input}
          label="First Name"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          label="Age"
        />
        <Field
          name="isOld"
          component={InputCheckbox}
          type="checkbox"
          label="Are you old?"
        />
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'initial-values',
})(InitialValues);
