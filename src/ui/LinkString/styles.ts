import styled from 'styled-components/native';

export const StyledLinkingString = styled.Text`
  color: ${props => `${props.theme.colors.main}`};
  font-size: ${props => `${props.theme.fontSizes.xs}`};
  align-self: flex-end;
  text-decoration-line: underline;
`;
