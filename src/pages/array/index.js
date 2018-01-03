import React from 'react'
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';

import Input from '../../components/Input';
import FormButtons from '../../components/FormButtons';

import { sendDataToApi } from '../../utils/api';

// #region render func
// const renderGoodStuff = ({ fields }) => (
//   <ul>
//     <li>
//       <Button
//         type="button"
//         raised
//         className="add-button"
//         onClick={() => fields.push({})}
//         >
//         Add good stuff
//       </Button>
//       {
//         fields.map((goodStuff, index) => (
//           <div key={index} className="good-suff">
//             <Button
//               type="button"
//               onClick={() => fields.remove(index)}
//               color="accent"
//               fab
//               className="remove-button"
//             >
//               X
//             </Button>
//             <Field
//               name={`${goodStuff}.name`}
//               component={Input}
//               label="Stuff name"
//             />
//             <Field
//               name={`${goodStuff}.amount`}
//               component={Input}
//               label="Amount"
//               type="number"
//             />
//           </div>
//         ))
//       }
//     </li>
//   </ul>
// )
// #endregion

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
        {/*<FieldArray
          name="goodStuff"
          component={renderGoodStuff}
        />*/}
        <FormButtons submitting={submitting} dirty={dirty} reset={reset} />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'array-form'
})(ArrayForm);
