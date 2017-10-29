import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Home = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  const sendDataToApi = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(formData);
        reject();
      }, 2000);
    })
  };

  return (
    <div>
      <h2>Simple home form</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component="input"
          placeholder="Put your first name"
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
  form: 'simple-form'
})(Home);
