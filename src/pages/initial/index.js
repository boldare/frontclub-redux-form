import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from '../../components/Input'

const InitialValues = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData)
        resolve();
      }, 2000);
    })
  };

  return (
    <div>
      <h2>Initial Values</h2>
        {/*onClick={loadValues}*/}
      <button
        type="button"
      >
        Load initial values
      </button>
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
  form: 'initial-values',
})(InitialValues);
