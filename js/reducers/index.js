// @flow

import { settingsReducer } from './settings';
import { playersReducer } from './players';

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

export const rootReducer = {
  players: playersReducer,
  settings: settingsReducer,
};
