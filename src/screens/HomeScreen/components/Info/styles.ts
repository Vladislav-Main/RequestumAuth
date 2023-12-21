import styled from 'styled-components/native';

export const StyledInfoView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledInfo = styled.Text`
  font-size: ${props => `${props.theme.fontSizes.m}`};
  font-weight: 500;
  color: ${props => `${props.theme.colors.text}`};
`;
