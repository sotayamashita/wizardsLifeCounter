/**
 * @flow
 */
'use strict';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type Id = number;

export type Score = number;

export type Player = {
  id: Id,
  score: number,
};

export type Settings = Object;

export type Players = Array<Player>;

export type State = {
  settings: Settings,
  players: Players,
};

export type Action =
    { type: 'ADD_PLAYER', payload: { id: Id, score: Score }}
  | { type: 'RESET_SCORE' }
  | { type: 'CHANGE_SCORE', payload: { id: Id, score: Score }}
  ;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;


