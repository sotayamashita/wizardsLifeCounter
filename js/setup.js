// @flow

import type {Store} from './types';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import WizardsLifeCounter from './WizardsLifeCounter';

const store: Store = configureStore();

export default function setup() {
  class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <WizardsLifeCounter />
        </Provider>
      );
    }
  }

  return Root;
}
