/**
 * @flow
 */
'use strict';

import type {State, Settings, Players, Dispatch} from './types';
import type {Connector} from 'react-redux';
import React from 'react';
import {connect} from 'react-redux';
import styles from './style';
import Player from './componetns/player/';
import {
  addPlayer,
  changeScore,
} from './actions';
import {
  View,
  StatusBar,
} from 'react-native';

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
    this.props.dispatch(changeScore(id, score));
  }

  _generateScoreBoards(settings) {
    const { players }: Props = this.props;
    return (players.map((player, index) => {
      const rotate = (index % 2 !== 0);
      return <Player key={player.id}
                     rotate={rotate}
                     onChangeScore={this.changeScore.bind(this)}
        {...player} />;
    }));
  }

  render() {
    const { settings }: Props = this.props;
    return (
      <View style={styles.reset}>
        <StatusBar hidden={true}/>
        {this._generateScoreBoards(settings)}
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
