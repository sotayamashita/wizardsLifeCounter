/**
 * @flow
 */
'use strict';

import type {State, Settings, Players, Dispatch} from './types';
import type {Connector} from 'react-redux';
import {connect} from 'react-redux';
import React from 'react';
import styles from './style';
import Player from './componetns/player/';
import Utility from './componetns/utility';
import { addPlayer, changeScore, resetScore } from './actions';
import { View, StatusBar } from 'react-native';

export type Props = {
  settings: Settings,
  players: Players,
  dispatch: Dispatch,
};

class WizardsLifeCounter extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const { settings, dispatch }: Props = this.props;
    for (let i = 0; i < settings.nPlayer; i++) {
      dispatch(addPlayer(settings.score));
    }
  }

  changeScore(id, score) {
    const { dispatch }: Props = this.props;
    dispatch(changeScore(id, score));
  }

  onUserClickSettings() {
    console.log('settings');
  }

  onUserClickReset() {
    // TODO: Move it to action
    const { settings, dispatch }: Props = this.props;
    dispatch(resetScore());
    for (let i = 0; i < settings.nPlayer; i++) {
      dispatch(addPlayer(settings.score));
    }
  }

  generateScoreBoards() {
    // TODO: Rethink
    const { players }: Props = this.props;
    let components = players.map((player, index) => {
      const rotate = (index % 2 !== 0);
      return <Player key={player.id}
                     rotate={rotate}
                     onChangeScore={this.changeScore.bind(this)}
                     {...player} />;
    });
    // TODO: magic number
    components.splice(components.length / 2, 0, <Utility key={'utility'}
                                                         onUserClickSettings={this.onUserClickSettings.bind(this)}
                                                         onUserClickReset={this.onUserClickReset.bind(this)} />);
    return components;
  }

  render() {
    return (
      <View style={styles.reset}>
        <StatusBar hidden={true}/>
        {this.generateScoreBoards()}
      </View>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    settings: state.settings,
    players: state.players,
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
);

export default connector(WizardsLifeCounter);
