import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// import app from './appReducer';

export default combineReducers({
  // app,
  routing: routerReducer,
  form: formReducer,
})
