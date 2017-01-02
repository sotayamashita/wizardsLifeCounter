// @flow

import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { StyledItem, StyledItemIcon, StyledItemIconImage, StyledItemContent } from './StyledItem';

const ScoresItem = ({ isDarkThemeEnabled, onUserChangeDarkTheme }) => {
  return (
    <StyledItem>
      <StyledItemIcon>
        <StyledItemIconImage source={require('./image/phone.ios.png')}/>
      </StyledItemIcon>
      <StyledItemContent>
        <View style={styles.container}>
          <Text style={styles.text}>Uee the dark theme</Text>
          <Switch onValueChange={(value) => onUserChangeDarkTheme(value)}
                  value={isDarkThemeEnabled}/>
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
