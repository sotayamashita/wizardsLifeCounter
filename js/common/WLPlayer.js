// @flow

import React from 'react';
import type {Id, Score} from '../types/';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native';

type Props = {
  id: Id,
  score: Score,
  rotate: boolean,
  onChangeScore: (id: Id, score: Score) => void,
};

class Player extends React.Component {

  onChangeScore(id: Id, score: Score) {
    const { onChangeScore }: Props = this.props;
    onChangeScore(id, score);
  }

  // TODO Change method name
  _rotatable(rotate) {
    const style = styles.wrapper;
    return rotate ? style : [style, {transform: [{rotate: '180deg'}]}];
  }

  render() {
    const {rotate, id, score}: Props = this.props;
    return (
      <View style={this._rotatable(rotate)}>
        <View style={styles.name}>
          <View style={styles.nameBody}>
            <Text style={styles.nameText}>Player</Text>
          </View>
        </View>
        <View style={styles.score}>
          <View style={styles.scoreBody}>
            <Text style={styles.scoreText}>{score}</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonsBody}>
            <TouchableHighlight activeOpacity={0.7}
                                underlayColor={'rgba(24, 110, 168, 0.3)'}
                                style={styles.left}
                                onPress={() => this.onChangeScore(id, -1)}>
              <Text style={styles.leftText}>-</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.7}
                                underlayColor={'rgba(24, 110, 168, 0.3)'}
                                style={styles.right}
                                onPress={() => this.onChangeScore(id, +1)}>
              <Text style={styles.rightText}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    fontSize: 20,
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

export default Player;
