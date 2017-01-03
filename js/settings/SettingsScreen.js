// @flow

import React from 'react';
import type { Settings, Dispatch, State } from '../types/';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import WLHeader from '../common/WLHeader';
import StyledView from '../common/StyledView';
import { StyledSection, StyledSectionTitle, StyledSectionBody } from './StyledSection';
import DarkThemeItem from './DarkThemeItem';
import StatusBarItem from './StatusBarItem';
import ScoresItem from './ScoresItem';
import CodeItem from './CodeItem';
import { StatusBar } from 'react-native';
import { changeDarkTheme, changeStatusBar, changeDefaultScore } from '../actions';

export type Props = {
  settings: Settings,
  dispatch: Dispatch,
};

class SettingsScreen extends React.Component {

  onUserClickDene() {
    this.props.navigator.push({
      name: 'Scoreboard',
    });
  }

  onUserChangeDarkTheme(value) {
    this.props.dispatch(changeDarkTheme(value));
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
          name="Settings"
          onUserClickRightButton={() => this.onUserClickDene()}
        />
        <StyledSection>
          <StyledSectionTitle>Appearance & Behavior</StyledSectionTitle>
          <StyledSectionBody>
            <DarkThemeItem
              isDarkThemeEnabled={settings.isDarkThemeEnabled}
              onUserChangeDarkTheme={(value) => this.onUserChangeDarkTheme(value)}
            />
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
        <StyledSection>
          <StyledSectionTitle>About</StyledSectionTitle>
          <StyledSectionBody>
            <CodeItem />
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
