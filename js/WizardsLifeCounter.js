/**
 * @flow
 */
'use strict';

import type {State, Players, Dispatch} from './types';
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
  players: Players,
  dispatch: Dispatch,
};

class WizardsLifeCounter extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    // TODO Get number of player from setting
    for (let i = 0; i < 2; i += 1) {
      this.props.dispatch(addPlayer(20));
    }
  }

  changeScore(id, score) {
    this.props.dispatch(changeScore(id, score));
  }

  render() {
    const {players}: Props = this.props;
    return (
      <View style={styles.reset}>
        <StatusBar hidden={true}/>
        {players.map((player, index) => {
          const rotate = (index % 2 !== 0);
          return <Player key={player.id}
                         rotate={rotate}
                         onChangeScore={this.changeScore.bind(this)}
            {...player} />;
        })}
      </View>
    );
  }
}


const mapStateToProps = (state: State) => {
  return {
    players: state.players,
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
);

export default connector(WizardsLifeCounter);
