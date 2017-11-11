import React from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form';

import Button from 'material-ui/Button';

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
      <Button
        type="button"
        raised
        className="add-button"
        onClick={() => fields.push({})}
        >
        Add employee
      </Button>
      {
        fields.map((employee, index) => (
          <div key={index} className="employee">
            <Button
              type="button"
              onClick={() => fields.remove(index)}
              color="accent"
              fab
              className="remove-button"
            >
              X
            </Button>
            <Field
              name={`${employee}.firstName`}
              component={Input}
              label="First Name"
            />
            <Field
              name={`${employee}.lastName`}
              component={Input}
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
          label="Company name"
        />
        <FieldArray
          name="employees"
          component={renderEmployees}
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
  )
}

export default reduxForm({
  form: 'array-form'
})(ArrayForm);
