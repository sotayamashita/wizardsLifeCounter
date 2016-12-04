/**
 * @flow
 */
'use strict';

import {createStore, combineReducers} from 'redux';
import * as reducers from '../reducers/';

export default function configureStore() {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
  );

  return store;
}
