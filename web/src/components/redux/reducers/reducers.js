/* jshint esversion: 6 */

import { combineReducers } from 'redux';

import * as _actions from '../actions/actions';

const merge = (prev, next) => Object.assign({}, prev, next);

const userSessionReducer = (userSession = {}, action) => {
  switch (action.type) {
    case _actions.UPDATE_USER_SESSION:
      return { ...userSession, ...action.payload };

    default:
      return userSession;
  }
};

const reducer = combineReducers({
  userSession: userSessionReducer,
});

export default reducer;
