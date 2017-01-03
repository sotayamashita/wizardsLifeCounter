// @flow

import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import { StyledItem, StyledItemIcon, StyledItemIconImage, StyledItemContent } from './StyledItem';

const CodeItem = () => {
  return (
    <StyledItem>
      <StyledItemIcon>
        <StyledItemIconImage source={require('./image/code.ios.png')}/>
      </StyledItemIcon>
      <StyledItemContent>
        <TouchableOpacity style={styles.container} onPress={() => handleClick()}>
          <Text style={styles.text}>Code on GitHub</Text>
          <Image style={styles.image} source={require('./image/open.ios.png')} />
        </TouchableOpacity>
      </StyledItemContent>
    </StyledItem>
  )
};

const handleClick = () => {
  const url = 'https://github.com/sotayamashita/wizardsLifeCounter/';
  Linking.canOpenURL(url).then(supported => {
    (supported) ? Linking.openURL(url) : console.log('Don\'t know how to open URI: ' + url);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#3a8af6',
  },
  image: {
    opacity: 0.3,
  }
});

export default CodeItem;
