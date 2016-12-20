/**
 * @flow
 */
'use strict';

import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers/';

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
