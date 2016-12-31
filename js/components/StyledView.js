/**
 * @flow
 */

import styled from 'styled-components/native';
const StyleView = styled.View`
  flex: 1;
  padding: ${(props) => (props.theme === 'main') ? 10 : 0}
  backgroundColor: ${(props) => (props.backgroundColor) ? props.backgroundColor : '#eeeeee' };
`;

export default StyleView;
