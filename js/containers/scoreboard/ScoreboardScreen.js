/**
 * @flow
 */
'use strict';

import type {State, Settings, Players, Dispatch} from '../../types';
import type {Connector} from 'react-redux';
import {connect} from 'react-redux';
import React from 'react';
import styles from './style';
import Player from '../../componetns/player/';
import Utility from '../../componetns/utility/';
import { addPlayer, changeScore, resetScore } from '../../actions';
import { View } from 'react-native';

export type Props = {
  settings: Settings,
  players: Players,
  dispatch: Dispatch,
};

class ScoreboardScreen extends React.Component {

  constructor(prop) {
    super(prop);
    this.settings = this.settings.bind(this);
    this.onUserClickReset = this.onUserClickReset.bind(this);
  }

  componentDidMount() {
    // TODO: Reconsider
    const { settings, dispatch }: Props = this.props;
    if (this.props.players.length === 0) {
      for (let i = 0; i < settings.nPlayer; i++) {
        dispatch(addPlayer(settings.score));
      }
    }
  }

  changeScore(id, score) {
    const { dispatch }: Props = this.props;
    dispatch(changeScore(id, score));
  }

  settings() {
    this.props.navigator.push({
      name: 'Setting',
      type: 'left',
    });
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
    // TODO: Reconsider
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
                                                         onUserClickSettings={this.settings}
                                                         onUserClickReset={this.onUserClickReset.bind(this)} />);
    return components;
  }

  render() {
    return (
      <View style={styles.reset}>
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

export default connector(ScoreboardScreen);
