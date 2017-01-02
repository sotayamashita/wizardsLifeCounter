// @flow

import { createStore, combineReducers } from 'redux';
import { rootReducer } from '../reducers/';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore() {
  const store = createStore(combineReducers(rootReducer));

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
