import React from 'react';
// import Button from 'material-ui/Button';

import { sendDataToApi } from '../../utils/api';

const Home = (props) => {
  return (
    <div>
      <h2>Simple home form</h2>
      <form className="mui-form" onSubmit={sendDataToApi}>
        {/* <Button
          raised
          color="primary"
          type="submit"
        >
          Submit form
        </Button> */}
      </form>
    </div>
  );
};

export default Home;
