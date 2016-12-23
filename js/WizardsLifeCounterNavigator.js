/**
 * @flow
 */
'use strict';

import React from 'react';
import { Navigator } from 'react-native';
import ScoreboardsScreen from './containers/scoreboard/ScoreboardScreen';
import SettingsScreen from './containers/settings/SettingsScreen';

const WizardsLifeCounterNavigator = () =>
  <Navigator
    configureScene={_configureScene}
    initialRoute={{ name: 'Setting' }}
    renderScene={_renderScene} />;

const _configureScene = (route, routeStack) => {
  switch (route.type) {
    case 'left':
      return Navigator.SceneConfigs.FloatFromLeft;
    default:
      return Navigator.SceneConfigs.FloatFromRight;
  }
};

const _renderScene = (route, navigator) => {
  switch (route.name) {
    case 'Scoreboard':
      return <ScoreboardsScreen navigator={navigator} />;
    case 'Setting':
      return <SettingsScreen navigator={navigator} />;
    default:
  }
};

export default WizardsLifeCounterNavigator;

