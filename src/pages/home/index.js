import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from 'material-ui/Button';

import { sendDataToApi } from '../../utils/api';

const Home = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <h2>Simple home form</h2>
      <form className="mui-form" onSubmit={handleSubmit(sendDataToApi)}>
        <Field
          name="firstName"
          component="input"
          placeholder="Put your name here"
        />
        {/* <Button
          onClick={reset}
          type="button"
          disabled={!dirty || submitting}
        >
          Reset form
        </Button> */}
        <Button
          raised
          color="primary"
          type="submit"
        >
          Submit form
        </Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple-form'
})(Home);
