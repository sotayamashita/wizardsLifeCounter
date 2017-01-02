// @flow

import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { StyledItem, StyledItemIcon, StyledItemIconImage, StyledItemContent } from './StyledItem';

const ScoresItem = ({ isStatusBarEnabled, onUserChangeStatusBar }) => {
  return (
    <StyledItem>
      <StyledItemIcon>
        <StyledItemIconImage source={require('./image/battery.ios.png')}/>
      </StyledItemIcon>
      <StyledItemContent>
        <View style={styles.container}>
          <Text style={styles.text}>Show the status bar</Text>
          <Switch onValueChange={(value) => onUserChangeStatusBar(value)}
                  value={isStatusBarEnabled}/>
        </View>
      </StyledItemContent>
    </StyledItem>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default ScoresItem;
