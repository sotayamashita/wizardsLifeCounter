/**
 * @flow
 */
'use strict';

import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#4395f7',
  },
  name: {
    position: 'absolute',
    zIndex: 10,
    top: 35,
    left: 0,
    right: 0,
  },
  nameBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 30,
    color: '#a3d6f5',
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
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  leftText: {
    flex: 1,
    textAlign: 'left',
    color: '#a3d6f5',
    fontSize: 50,
    alignSelf: 'flex-end',
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    color: '#a3d6f5',
    fontSize: 50,
    alignSelf: 'flex-end',
  }
});

export default styles;
