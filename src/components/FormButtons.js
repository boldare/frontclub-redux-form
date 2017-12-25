import React from 'react';
import Loader from './Loader';
import Button from 'material-ui/Button';


const FormButtons = ({ submitting, dirty, reset }) => (
  <span>
    {
      submitting ? (
        <Loader />
      ) : (
          <span>
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
          </span>
        )
    }
  </span>
);

export default FormButtons;
