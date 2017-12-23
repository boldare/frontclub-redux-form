import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'

const validate = values => {
  let errors = {};

  if (!values.myName) {
    errors.myName = 'You better insert my name'
  }

  return errors;
}

const warn = values => {
  let warnings = {};

  if (values.myName && 3 > values.myName.length) {
    warnings.myName = 'I can afford longer name'
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

  const saveAndHandleServerValidation = (formData) => {
    console.log('Say my name!')
    return new Promise((resolve, reject) => {
      sendDataToApi(formData)
        .then((res) => {
          console.log(formData.myName)
          console.log('You are god damn right!')
          resolve();
        }, (err) => {
          console.log(formData.myName)
          console.log('Pif Paf');
          reject();
        });
    })
  };

  return (
    <div>
      <h2>Validation form</h2>
      <form onSubmit={handleSubmit(saveAndHandleServerValidation)}>
        <div className="check-labels">
          Submit success:
          <Chip className={submitSucceeded ? 'active' : 'inactive'} label={`${submitSucceeded}`} />
        </div>
        <div className="check-labels">
          Submit failure:
          <Chip className={submitFailed ? 'active' : 'inactive'} label={`${submitFailed}`} />
        </div>
        <Field
          name="myName"
          component={Input}
          label="Say my name"
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
