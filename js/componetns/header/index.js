/**
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import styles from './style';
import { View, Text, TouchableOpacity } from 'react-native';

class Header extends  Component {

  constructor() {
    super();
  }

  _onUserClickLeftButton() {
    this.props.onUserClickLeftButton();
  }

  _onUserClickRightButton() {
    this.props.onUserClickRightButton();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity accessibilityLabel="Cancel"
                            accessibilityTraits="button"
                            style={styles.leftItem}
                            onPress={() => this._onUserClickLeftButton()}>
            <Text style={styles.titleText}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.centerItem}>
            <Text style={styles.titleText}>{this.props.name}</Text>
          </View>
          <TouchableOpacity accessibilityLabel="Cancel"
                            accessibilityTraits="button"
                            style={styles.rightItem}
                            onPress={() => this._onUserClickRightButton()}>
            <Text style={styles.titleText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
