import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'
import InputCheckbox from '../../components/InputCheckbox'
import FormButtons from '../../components/FormButtons'

const InitialValues = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  const saveAndSendData = (formData) => {
    sendDataToApi(formData)
      .then(() => {
        props.initialize(formData);
      });
  };

  const upper = value => value && value.toUpperCase()

  const isAbove25 = (value, prevVal, allValues) => {
    if (value > 24) {
      props.change('isOld', true)

      return value
    }

    props.change('isOld', false)
    return value
  }

  const data = {
    firstName: 'Michal',
    age: 24,
  }

  return (
    <div>
      <h2>Bro's order</h2>
      <form onSubmit={handleSubmit(saveAndSendData)}>
        <Button
          raised
          type="button"
          onClick={() => props.initialize({ ...data })}
        >
          Jesse! Tell me more about that guy!
      </Button>
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
          normalize={isAbove25}
        />
        <Field
          name="isOld"
          component={InputCheckbox}
          type="checkbox"
          label="Are you old?"
        />
        <Field
          name="shout"
          component={Input}
          type="text"
          label="Shout somthing"
          normalize={upper}
        />
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'initial-values',
})(InitialValues);
