import styled from 'styled-components/native';

export const StyledHeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StyledHeaderText = styled.Text`
  font-size: ${props => `${props.theme.fontSizes.l}`};
  font-weight: 600;
  color: ${props => `${props.theme.colors.text}`};
  padding-bottom: 8px;
`;
