import React from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form';

import Input from '../../components/Input';

const sendDataToApi = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(formData);
      resolve();
    }, 2000);
  })
};

const renderEmployees = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add employee
      </button>
      {
        fields.map((employee, index) => (
          <div key={index}>
            <button type="button" onClick={() => fields.remove(index)}>
              Remove employee
            </button>
            <Field
              name={`${employee}.firstName`}
              component={Input}
              placeholder="Put your first name"
              label="First Name"
            />
            <Field
              name={`${employee}.lastName`}
              component={Input}
              placeholder="Put your last name"
              label="Last Name"
            />
          </div>
        ))
      }
    </li>
  </ul>
)


const ArrayForm = (props) => {
  const { handleSubmit, dirty, submitting, reset } = props;

  return (
    <div>
      <h2>Array form</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="companyName"
          component={Input}
          placeholder="Put your company name"
          label="Company name"
        />
        <FieldArray
          name="employees"
          component={renderEmployees}
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
  )
}

export default reduxForm({
  form: 'array-form'
})(ArrayForm);
