import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import Chip from 'material-ui/Chip';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'
import FormButtons from '../../components/FormButtons'

const Validation = (props) => {
  const { handleSubmit, dirty, reset, submitting, submitFailed, submitSucceeded } = props;

  return (
    <div>
      <h2>One time order</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
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
          />
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'validation',
})(Validation);
