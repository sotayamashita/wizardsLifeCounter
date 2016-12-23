/**
 * @flow
 */
'use strict';

import React from 'react';
import styles from './style';
import {View, Image, TouchableHighlight} from 'react-native';

type Props = {
  onUserClickSettings: () => void,
  onUserClickReset: () => void,
}

class Utility extends React.Component {

  onUserClickSettings() {
    const { onUserClickSettings }: Props = this.props;
    onUserClickSettings();
  }

  onUserClickReset() {
    const { onUserClickReset }: Props = this.props;
    onUserClickReset();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableHighlight underlayColor={'rgba(200, 200, 200, .3)'}
                            onPress={() => this.onUserClickSettings()}>
          <Image source={require('../../assets/image/settings.ios.png')}/>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'rgba(200, 200, 200, .3)'}
                            onPress={() => this.onUserClickReset()}>
          <Image source={require('../../assets/image/replay.ios.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

export default Utility;
