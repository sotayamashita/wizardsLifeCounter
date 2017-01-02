// @flow

import type { Id, Action } from '../types';

export const changeDarkTheme = (isDarkThemeEnabled): Action => {
  return {
    type: 'CHANGE_DARK_THEME',
    payload: {
      isDarkThemeEnabled: isDarkThemeEnabled,
    }
  }
};

export const changeStatusBar = (isStatusBarEnabled): Action => {
  return {
    type: 'CHANGE_STATUS_BAR',
    payload: {
      isStatusBarEnabled: isStatusBarEnabled,
    }
  }
};

export const changeDefaultScore = (id: Id): Action => {
  return {
    type: 'CHANGE_DEFAULT_SCORE',
    payload: {
      id
    }
  };
};
