import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';

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
  const { handleSubmit, dirty, reset, submitting, submitFailed, submitSucceeded } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        if (formData.email && 'asd@asd.pl' === formData.email) {
          reject(new SubmissionError({
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
        <div className="check-labels">
          Submit success:
          <Chip className={submitSucceeded ? 'active' : 'inactive'} label={`${submitSucceeded}`} />
        </div>
        <div className="check-labels">
          Submit failure:
          <Chip className={submitFailed ? 'active' : 'inactive'} label={`${submitFailed}`} />
        </div>
        <Field
          name="firstName"
          component={Input}
          label="First Name"
        />
        <Field
          name="email"
          component={Input}
          type="email"
          label="Email"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          label="Age"
          validate={isGreaterThan10}
        />
        <Button
          onClick={reset}
          type="button"
          disabled={!dirty || submitting}
        >
          Reset form
        </Button>
        <Button
          raised
          color="primary"
          type="submit"
          disabled={!dirty || submitting}
        >
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'validation',
  validate,
  warn,
})(Validation);
