import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Chip from 'material-ui/Chip';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'
import FormButtons from '../../components/FormButtons'

const validate = values => {
  let errors = {};

  if (!values.myName) {
    errors.myName = 'You better insert my name'
  }

  return errors;
}

const warn = values => {
  let warnings = {};

  if (values.myName && "Heisenberg" === values.myName) {
    warnings.myName = 'You are god damn right!'
  }

  return warnings;
}

const isGreaterThan10 = value => {
  if (value && value < 10) {
    return "Way tooo young to smoke crystals. Get out of here!"
  }

  return undefined;
}

const Validation = (props) => {
  const { handleSubmit, dirty, reset, submitting, submitFailed, submitSucceeded } = props;

  const saveAndHandleServerValidation = (formData) => {
    return new Promise((resolve, reject) => {
      sendDataToApi(formData)
        .then((res) => {
          resolve();
        }, (err) => {
          reject(new SubmissionError(err));
        });
    })
  };

  return (
    <div>
      <h2>One time order</h2>
      <form onSubmit={handleSubmit(saveAndHandleServerValidation)}>
        <div className="check-labels">
          Submit success:
          <Chip
            className={
              submitSucceeded
              ? 'active'
              : 'inactive'
            }
            label={`${submitSucceeded}`}
          />
        </div>
        <div className="check-labels">
          Submit failure:
          <Chip
            className={
              submitFailed
              ? 'active'
              : 'inactive'
            }
            label={`${submitFailed}`}
          />
        </div>
        <Field
          name="myName"
          component={Input}
          label="Say my name"
        />
        <Field
          name="stuff"
          component={Input}
          label="What stuff do you need?"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          label="Age"
          validate={isGreaterThan10}
        />
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'validation',
  validate,
  warn,
})(Validation);
