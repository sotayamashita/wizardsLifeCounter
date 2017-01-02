// @flow

import type { Id, Score, Action } from '../types';

let nextTodoId: Id = 0;

export const addPlayer = (score: Score): Action => {
  return {
    type: 'ADD_PLAYER',
    payload: {
      id: nextTodoId++,
      score,
    },
  };
};

export const changeScore = (id: Id, score: Score): Action => {
  return {
    type: 'CHANGE_SCORE',
    payload: {
      id,
      score,
    },
  };
};

export const resetScore = (): Action => {
  return {
    type: 'RESET_SCORE',
  };
};
