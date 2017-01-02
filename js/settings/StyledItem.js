// @flow

import styled from 'styled-components/native';

export const StyledItem = styled.View`
  borderBottomWidth: 1;
  backgroundColor: #fff;
  borderBottomColor: #ccd6dd;
  flexDirection: row;
`;

export const StyledItemIcon = styled.View`
  padding: 10;
  width: 55;
  alignItems: center;
  justifyContent: center;
`;

export const StyledItemIconImage = styled.Image`
  width: 30;
  height: 30
`;

export const StyledItemContent = styled.View`
  padding: 10;
  flex: 1;
`;
