import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

import { sendDataToApi } from '../../utils/api';

import Input from '../../components/Input'
import InputCheckbox from '../../components/InputCheckbox'
import FormButtons from '../../components/FormButtons'

const USER_DATA = {
  firstName: 'Michal',
  age: 24,
}

const InitialValues = (props) => {
  const { handleSubmit, dirty, reset, submitting } = props;

  // #region INITIAL VALUES
  // const saveAndSendData = (formData) => {
  //   sendDataToApi(formData)
  //     .then(() => {
  //       props.initialize(formData);
  //     });
  // };
  // #endregion

  // #region NORMALIZATION
  // const upper = value => value && value.toUpperCase()

  // const isAbove25 = (value, prevVal, allValues) => {
  //   if (value > 24) {
  //     props.change('isOld', true)

  //     return value
  //   }

  //   props.change('isOld', false)
  //   return value
  // }
  // #endregion

  return (
    <div>
      <h2>Bro's order</h2>
      <form onSubmit={handleSubmit(sendDataToApi)}>
        {/*<Button
          raised
          type="button"
          onClick={() => props.initialize({ ...USER_DATA })}
        >
          Jesse! Tell me more about that guy!
        </Button>*/}
        <Field
          name="firstName"
          component={Input}
          label="First Name"
        />
        <Field
          name="age"
          component={Input}
          type="number"
          label="Age"
        />
        <Field
          name="isOld"
          component={InputCheckbox}
          type="checkbox"
          label="Are you old?"
        />
        {/*NORMALIZATION*/}
        {/*<Field
          name="shout"
          component={Input}
          type="text"
          label="Shout somthing"
          normalize={upper}
        />*/}
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'initial-values',
})(InitialValues);
