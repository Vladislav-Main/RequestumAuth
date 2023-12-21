import styled from 'styled-components/native';

export const StyledTitleView = styled.View`
  padding-bottom: 54px;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-size: ${props => `${props.theme.fontSizes.l}`};
  font-weight: 600;
  color: ${props => `${props.theme.colors.text}`};
`;
