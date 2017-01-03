// @flow

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';

class Header extends  Component {

  constructor() {
    super();
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
                            style={styles.leftItem}>
            <Text style={styles.titleText}></Text>
          </TouchableOpacity>
          <View style={styles.centerItem}>
            <Text style={styles.titleText}>{this.props.name}</Text>
          </View>
          <TouchableOpacity accessibilityLabel="Cancel"
                            accessibilityTraits="button"
                            style={styles.rightItem}
                            onPress={() => this._onUserClickRightButton()}>
            <Text style={styles.optionText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
    marginBottom: 30,
  },
  header: {
    height: HEADER_HEIGHT,
    paddingTop: STATUS_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4395f7',
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Header;
