import React from 'react'
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';

import Input from '../../components/Input';
import FormButtons from '../../components/FormButtons';

import { sendDataToApi } from '../../utils/api';

const ArrayForm = (props) => {
  const { handleSubmit, dirty, submitting, reset } = props;

  return (
    <div>
      <h2>Wholesale order</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="name"
          component={Input}
          label="Bro's name"
        />
        <Field
          name="stuffName"
          component={Input}
          label="Stuff's name"
        />
        <Field
          name="stuffAmount"
          component={Input}
          label="Amount"
        />
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'array-form'
})(ArrayForm);
