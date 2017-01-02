// @flow

import styled from 'styled-components/native';
const StyleView = styled.View`
  flex: 1;
  paddingTop: ${(props) => (props.theme === 'main') ? 20 : 0}
  paddingRight: ${(props) => (props.theme === 'main') ? 10 : 0}
  paddingBottom: ${(props) => (props.theme === 'main') ? 20 : 0}
  paddingLeft: ${(props) => (props.theme === 'main') ? 10 : 0}
  backgroundColor: ${(props) => (props.isDarkThemeEnabled) ? '#000' : '#eeeeee' };
`;

export default StyleView;
