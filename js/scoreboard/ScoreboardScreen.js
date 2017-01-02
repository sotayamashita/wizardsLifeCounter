// @flow

import type { State, Settings, Players, Dispatch } from '../types';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import React from 'react';
import WLPlayer from '../common/WLPlayer';
import WLUtility from '../common/WLUtility';
import StyledView from '../common/StyledView';
import { StatusBar } from 'react-native';
import { addPlayer, changeScore, resetScore } from '../actions';

export type Props = {
  settings: Settings,
  players: Players,
  dispatch: Dispatch,
};

class ScoreboardScreen extends React.Component {

  componentDidMount() {
    // TODO: Reconsider
    const { settings, dispatch }: Props = this.props;
    const score = this.getScores(settings);
    if (this.props.players.length === 0) {
      for (let i = 0; i < settings.nPlayer; i++) {
        dispatch(addPlayer(score));
      }
    }
  }

  changeScore(id, score) {
    const { dispatch }: Props = this.props;
    dispatch(changeScore(id, score));
  }

  settingScene() {
    this.props.navigator.push({
      name: 'Setting',
      type: 'left',
    });
  }

  getScores(settings) {
    console.log(settings);
    const scores = settings.scores;
    let value = 0;
    for (let i = 0; i < scores.length; i += 1) {
      if (scores[i].enable) {
        value = scores[i].value;
        break;
      }
    }

    return value;
  }

  onUserClickReset() {
    // TODO: Move it to action
    const { settings, dispatch }: Props = this.props;
    const score = this.getScores(settings);
    dispatch(resetScore());
    for (let i = 0; i < settings.nPlayer; i++) {
      dispatch(addPlayer(score));
    }
  }

  generateScoreBoards() {
    // TODO: Reconsider
    const { players }: Props = this.props;
    let components = players.map((player, index) => {
      const rotate = (index % 2 !== 0);
      return <WLPlayer key={player.id}
                     rotate={rotate}
                     onChangeScore={this.changeScore.bind(this)}
                     {...player} />;
    });
    // TODO: magic number
    components.splice(components.length / 2, 0, <WLUtility key={'utility'}
                                                         onUserClickSettings={() => this.settingScene()}
                                                         onUserClickReset={() => this.onUserClickReset()} />);
    return components;
  }

  render() {
    const { settings } = this.props;
    return (
      <StyledView theme="main" isDarkThemeEnabled={settings.isDarkThemeEnabled}>
        <StatusBar hidden={!settings.isStatusBarEnabled} barStyle={(settings.isDarkThemeEnabled) ? 'light-content' : 'dark-content'}/>
        {this.generateScoreBoards()}
      </StyledView>
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
