/**
 * @flow
 */
'use strict';

import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import WizardsLifeCounterNavigator from './WizardsLifeCounterNavigator';

const WizardsLifeCounter = () =>
  <View style={styles.container}>
    <StatusBar hidden={true} />
    <WizardsLifeCounterNavigator />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  }
});

export default WizardsLifeCounter;
