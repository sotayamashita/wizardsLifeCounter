/**
 * @flow
 */
'use strict';

import type {Action, Players, Player, Id, Score} from '../types';

const initialState = [];

function createPlayer(id: Id, score: Score): Player {
  return {
    id,
    score,
  };
}

function changeScore(players: Players, id: Id, score: Score) {
  return players.map(player => {
    if (player.id !== id) {
      return player;
    }
    return Object.assign({}, player, {
      score: player.score + score,
    });
  });
}

export const players = (state: Players = initialState, action: Action): Players => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        createPlayer(action.payload.id, action.payload.score),
      ];
    case 'CHANGE_SCORE':
      return changeScore(state, action.payload.id, action.payload.score);
    case 'RESET_SCORE':
      return initialState;
    default:
      return state;
  }
};
