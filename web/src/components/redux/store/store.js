/* jshint esversion: 6 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import { createLogger } from 'redux-logger';

import * as _actions from '../actions/actions';
import rootReducer from '../reducers/reducers';

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ diff: true });

  // returns error when state is mutated
  middlewares.push(freeze);
  middlewares.push(logger);
  console.log('development environment')
} else {
  console.log('production environment')
}

export function configureStore() {
  const persistedState = {};

  const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));
  return store;
}

const store = configureStore();

/* --- Initialize store with objects from graphql server --- */
store.dispatch(
  _actions.updateUserSession({
    selectedLocation: 'Los Angeles, CA',
    locationIndex: 0,
  }),
);

export default store;
