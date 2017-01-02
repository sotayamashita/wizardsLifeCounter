// @flow

import { createReducer } from './';
import type { Action, Players } from '../types';

const initialState = [];

// Case reducer
function addPlayer(playersState: Players, action: Action) {
  return [
    ...playersState,
    {
      id: action.payload.id,
      score: action.payload.score,
    }
  ];
}

// Case reducer
function changeScore(playersState: Players, action: Action) {
  return playersState.map((player) => {
    if (player.id !== action.payload.id) {
      return player;
    }

    return {
      ...player,
      score: player.score + action.payload.score,
    };
  });
}

// Case reducer
function resetScore() {
  return initialState;
}

// Slice reducer
export const playersReducer = createReducer(initialState, {
  'ADD_PLAYER' : addPlayer,
  'CHANGE_SCORE' : changeScore,
  'RESET_SCORE' : resetScore,
});
