import { handleActions } from 'redux-actions';
import {loadInitialAccount } from './appActions';

const initialState = {};

export default handleActions({
  [loadInitialAccount](state, { payload }) {
    return {
      ...state,
      account: payload,
    };
  },
}, initialState);
