import styled from 'styled-components/native';

export const StyledSubTitleView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StyledSubTitle = styled.Text`
  padding-bottom: 8px;
  font-size: ${props => `${props.theme.fontSizes.xs}`};
  color: ${props => `${props.theme.colors.lightGrey}`};
`;
