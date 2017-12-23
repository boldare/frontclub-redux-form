import React from 'react'
import { reduxForm, Field, FieldArray } from 'redux-form';

import Button from 'material-ui/Button';

import Input from '../../components/Input';
import { sendDataToApi } from '../../utils/api';

const renderGoodStuff = ({ fields }) => (
  <ul>
    <li>
      <Button
        type="button"
        raised
        className="add-button"
        onClick={() => fields.push({})}
        >
        Add good stuff
      </Button>
      {
        fields.map((goodStuff, index) => (
          <div key={index} className="good-suff">
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
              name={`${goodStuff}.name`}
              component={Input}
              label="Stuff name"
            />
            <Field
              name={`${goodStuff}.amount`}
              component={Input}
              label="Amount"
              type="number"
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
      <h2>Bro's order</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="name"
          component={Input}
          label="Bro's name"
        />
        <FieldArray
          name="goodStuff"
          component={renderGoodStuff}
        />
        <Button
          onClick={reset}
          type="button"
          disabled={!dirty || submitting}
        >
          Ain't nobody got time for that
        </Button>
        <Button
          raised
          color="primary"
          type="submit"
          disabled={!dirty || submitting}
        >
          Pack that stuff
        </Button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'array-form'
})(ArrayForm);
