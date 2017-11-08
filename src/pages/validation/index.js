import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Input from '../../components/Input'

const validate = values => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = 'Please insert first name'
  }

  return errors;
}

const warn = values => {
  let warnings = {};

  if (values.firstName && 3 > values.firstName.length) {
    warnings.firstName = 'Too short name'
  }

  return warnings;
}

const isGreaterThan10 = value => {
  if (value && value < 10) {
    return "Tooooo young"
  }

  return undefined;
}

const Validation = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        if (formData.email && 'asd@asd.pl' === formData.email) {
          reject (new SubmissionError({
            email: 'That is fake'
          }))
        }
        resolve();
      }, 2000);
    })
  };

  return (
    <div>
      <h2>Validation form</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component={Input}
          placeholder="Put your first name"
          label="First Name"
        />
        <Field
          name="email"
          component={Input}
          type="email"
          placeholder="Put your email here"
          label="Email"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          placeholder="Put your age here"
          label="Age"
          validate={isGreaterThan10}
        />
        <button
          onClick={reset}
          type="button"
          disabled={!dirty || submitting}
        >
          Reset form
        </button>
        <button
          type="submit"
          disabled={!dirty || submitting}
        >
          Submit form
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple-form',
  validate,
  warn,
})(Validation);
