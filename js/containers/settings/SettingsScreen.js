/**
 * @flow
 */
'use strict';

import React from 'react';
import Header from '../../components/header/';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';

class SettingsScreen extends React.Component {

  _onUserClickCancel() {
    this.props.navigator.push({
      name: 'Scoreboard',
    });
  }

  _onUserClickSave() {
    this.props.navigator.push({
        name: 'Scoreboard',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header name="Setting"
                onUserClickRightButton={() => this._onUserClickCancel()}
                onUserClickLeftButton={() => this._onUserClickSave()} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Format</Text>
          <View style={styles.sectionBody}>
            {/* Format - Life */}
            <View style={styles.item}>
              <View style={styles.itemIcon}>
                <Image style={styles.itemIconImage} source={require('../../assets/image/life.ios.png')}/>
              </View>
              <View style={styles.itemContent}>
                <View style={styles.lifeContainer}>
                  <TouchableOpacity style={styles.lifeItem}><Text style={styles.lifeItemText}>20</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.lifeItem}><Text style={styles.lifeItemText}>30</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.lifeItem}><Text style={styles.lifeItemText}>40</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.lifeItem}><Text style={styles.lifeItemText}>50</Text></TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Format - Life End */}
            {/* Format - Counter */}
            <View style={styles.item}>
              <View style={styles.itemIcon}>
                <Image style={styles.itemIconImage} source={require('../../assets/image/counter.ios.png')}/>
              </View>
              <View style={styles.itemContent}>
                <View style={styles.counterContainer}>
                  <Text style={styles.counterText}>Secondary counter</Text><Switch />
                </View>
                <View style={styles.counterContainer} />
                <View style={styles.counterContainer}>
                  <Text style={styles.counterText}>Reset when game resets</Text><Switch />
                </View>
              </View>
            </View>
            {/* Format - Counter End */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  sectionTitle: {
    color: '#586c7c',
    fontSize: 16,
    marginBottom: 5,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderTopColor: '#ccd6dd',
    borderBottomColor: '#ccd6dd',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccd6dd',
    flexDirection: 'row',
  },
  itemIcon: {
    padding: 10,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemIconImage: {
    width: 30,
    height: 30,
  },
  itemContent: {
    padding: 10,
    flex: 1,
  },
  lifeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lifeItem: {
    width: 65,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    padding: 10,
    alignItems: 'center',
  },
  lifeItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
