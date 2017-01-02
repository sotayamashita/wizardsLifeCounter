// @flow

import React from 'react';
import type { Settings, Dispatch, State } from '../types/';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import WLHeader from '../common/WLHeader';
import StyledView from '../common/StyledView';
import { StyledSection, StyledSectionTitle, StyledSectionBody } from './StyledSection';
import StatusBarItem from './StatusBarItem';
import ScoresItem from './ScoresItem';
import { StatusBar } from 'react-native';
import { changeStatusBar, changeDefaultScore } from '../actions';

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

  onUserChangeStatusBar(value) {
    this.props.dispatch(changeStatusBar(value));
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
        <StatusBar hidden={!settings.isStatusBarEnabled} barStyle="light-content"/>
        <WLHeader
          name="Setting"
          onUserClickRightButton={() => this.onUserClickCancel()}
          onUserClickLeftButton={() => this.onUserClickSave()}
        />
        <StyledSection>
          <StyledSectionTitle>Look & Feel</StyledSectionTitle>
          <StyledSectionBody>
            <StatusBarItem
              isStatusBarEnabled={settings.isStatusBarEnabled}
              onUserChangeStatusBar={(value) => this.onUserChangeStatusBar(value)}
            />
          </StyledSectionBody>
        </StyledSection>
        <StyledSection>
          <StyledSectionTitle>Format</StyledSectionTitle>
          <StyledSectionBody>
            <ScoresItem
              scores={settings.scores}
              onUserClickChangeScore={(score) => this.onUserClickChangeScore(score)}
            />
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
