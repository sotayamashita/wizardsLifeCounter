// @flow

import { createReducer } from './';
import type { Settings, Action } from '../types';

const initialState = {
  nPlayer: 2,
  isDarkThemeEnabled: false,
  isStatusBarEnabled: false,
  scores: [
    {
      id: 1,
      value: 20,
      enable: true,
      editable: false,
    },
    {
      id: 2,
      value: 30,
      enable: false,
      editable: false,
    },
    {
      id: 3,
      value: 40,
      enable: false,
      editable: false,
    },
    {
      id: 4,
      value: 50,
      enable: false,
      editable: true,
    }
  ],
};

// Case reducer
function changeDarkTheme(settingState: Settings, action: Action) {
  return Object.assign({}, settingState, {
    isDarkThemeEnabled: action.payload.isDarkThemeEnabled,
  });
}

// Case reducer
function changeStatusBar(settingsState: Settings, action: Action) {
  return Object.assign({}, settingsState, {
    isStatusBarEnabled: action.payload.isStatusBarEnabled,
  });
}

// Case reducer
function changeDefaultScore(settingsState: Settings, action: Action) {
  return Object.assign({}, settingsState, {
    scores: settingsState.scores.map(score => {
      if (score.id === action.payload.id) {
        return {
          id: score.id,
          value: score.value,
          enable: !score.enable,
          editable: score.editable,
        };
      } else {
        if (score.enable) {
          return {
            id: score.id,
            value: score.value,
            enable: !score.enable,
            editable: score.editable,
          };
        }
      }
      return score;
    })
  });
}

// Slice reducer
export const settingsReducer = createReducer(initialState, {
  'CHANGE_DARK_THEME' : changeDarkTheme,
  'CHANGE_STATUS_BAR' : changeStatusBar,
  'CHANGE_DEFAULT_SCORE' : changeDefaultScore,
});
