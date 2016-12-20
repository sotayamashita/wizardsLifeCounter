/**
 * @flow
 */
'use strict';

import React from 'react';
import Header from '../../componetns/header/';
import { View, StyleSheet } from 'react-native';

class SettingsScreen extends React.Component {

  _onUserClickCancel() {
    this.props.navigator.push({
      name: 'Scoreboard',
    });
  }

  _onUserClickSave() {
    this.props.navigator.push({
        name: 'Scoreboard',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name="Setting"
                onUserClickRightButton={() => this._onUserClickCancel()}
                onUserClickLeftButton={() => this._onUserClickSave()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default SettingsScreen;
