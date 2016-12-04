/**
 * @flow
 */
'use strict';
import type { Settings, Action } from '../types';

const initialState = {
  nPlayer: 2,
  score: 20,
};

export const settings = (state: Settings = initialState, action: Action): Settings => {
  switch (action.type) {
    default:
      return state;
  }
};
