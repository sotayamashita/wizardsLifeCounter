// @flow

import React from 'react';
import type { Settings, Dispatch, State } from '../types/';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import WLHeader from '../common/WLHeader';
import StyledView from '../common/StyledView';
import { StyledSection, StyledSectionTitle, StyledSectionBody } from './StyledSection';
import ScoresItem from './ScoresItem';
import { changeDefaultScore } from '../actions';

export type Props = {
  settings: Settings,
  dispatch: Dispatch,
};

class SettingsScreen extends React.Component {

  onUserClickCancel() {
    this.props.navigator.push({
      name: 'Scoreboard',
    });
  }

  onUserClickSave() {
    this.props.navigator.push({
        name: 'Scoreboard',
    });
  }

  onUserClickChangeScore(score) {
    if (!score.enable) {
      this.props.dispatch(changeDefaultScore(score.id));
    }
  }

  render() {
    const { settings } = this.props;
    return (
      <StyledView backgroundColor="#e0e0e0">
        <WLHeader name="Setting"
                  onUserClickRightButton={() => this.onUserClickCancel()}
                  onUserClickLeftButton={() => this.onUserClickSave()} />
        <StyledSection>
          <StyledSectionTitle>Format</StyledSectionTitle>
          <StyledSectionBody>
            <ScoresItem scores={settings.scores} onUserClickChangeScore={(score) => this.onUserClickChangeScore(score)}/>
          </StyledSectionBody>
        </StyledSection>
      </StyledView>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    settings: state.settings,
  };
};

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
);

export default connector(SettingsScreen);
