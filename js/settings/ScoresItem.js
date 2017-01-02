// @flow

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StyledItem, StyledItemIcon, StyledItemIconImage, StyledItemContent } from './StyledItem';

const ScoresItem = ({ scores, onUserClickChangeScore }) =>
  <StyledItem>
    <StyledItemIcon>
      <StyledItemIconImage source={require('./image/life.ios.png')}/>
    </StyledItemIcon>
    <StyledItemContent>
      <View style={styles.container}>
        {scores.map((score) =>
          <TouchableOpacity onPress={() => onUserClickChangeScore(score) } key={score.id} style={detectEnable(styles.item, {borderColor: '#282928'}, score.enable)}>
            <Text style={detectEnable(styles.text, {color: '#282928', fontWeight: 'bold'}, score.enable)}>{score.value}</Text>
          </TouchableOpacity>
        )}
      </View>
    </StyledItemContent>
  </StyledItem>;

// TODO Reconsider
const detectEnable = (beforeStyle, afterStyle, isEnabled) => {
  return isEnabled ? [beforeStyle, afterStyle] : beforeStyle;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 65,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#7e807f',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#8d8e8d',
  }
});

export default ScoresItem;
