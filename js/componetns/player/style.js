/**
 * @flow
 */
'use strict';

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#2c82bc',
  },
  score: {
    position: 'absolute',
    zIndex: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  scoreBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    color: '#ffffff',
    fontSize: 140,
  },
  buttons: {
    position: 'absolute',
    zIndex: 30,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonsBody: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftText: {
    flex: 1,
    textAlign: 'left',
    color: '#fff',
    fontSize: 60,
    alignSelf: 'flex-end'
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    color: '#fff',
    fontSize: 60,
    alignSelf: 'flex-end',
  }
});

export default styles;
