/**
 * @flow
 */
'use strict';

import React from "react";
import type {Id, Score} from "../../types/";
import styles from "./style";
import {View, Text, TouchableHighlight} from "react-native";

type Props = {
  id: Id,
  score: Score,
  rotate: boolean,
  onChangeScore: (id: Id, score: Score) => void,
};

class Player extends React.Component {

  onChangeScore(id: Id, score: Score) {
    this.props.onChangeScore(id, score);
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
            <TouchableHighlight activeOpacity={0.7} underlayColor={'rgba(24, 110, 168, 0.3)'} style={styles.left}
                                onPress={() => this.onChangeScore(id, -1)}>
              <Text style={styles.leftText}>-</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.7} underlayColor={'rgba(24, 110, 168, 0.3)'} style={styles.right}
                                onPress={() => this.onChangeScore(id, +1)}>
              <Text style={styles.rightText}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default Player;
