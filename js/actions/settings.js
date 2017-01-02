// @flow

import type {Id, Action} from '../types';

export const changeDefaultScore = (id: Id): Action => {
  return {
    type: 'CHANGE_DEFAULT_SCORE',
    payload: {
      id
    }
  };
};
