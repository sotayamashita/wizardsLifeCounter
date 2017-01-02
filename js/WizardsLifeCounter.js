// @flow

import React from 'react';
import { StatusBar } from 'react-native';
import StyledView from './common/StyledView';
import WizardsLifeCounterNavigator from './WizardsLifeCounterNavigator';

const WizardsLifeCounter = () =>
  <StyledView>
    <StatusBar hidden={true} />
    <WizardsLifeCounterNavigator />
  </StyledView>;

export default WizardsLifeCounter;
