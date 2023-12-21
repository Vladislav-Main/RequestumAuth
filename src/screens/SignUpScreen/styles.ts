import styled from 'styled-components/native';

export const StyledLoginView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const StyledUserIconView = styled.View`
  align-self: flex-end;
  padding-right: 40px;
  padding-bottom: 72px;
`;

export const StyledHeaderView = styled.View`
  padding-bottom: 24px;
`;

export const StyledWhiteText = styled.Text`
  font-size: ${props => `${props.theme.fontSizes.xs}`};
  color: ${props => `${props.theme.colors.text}`};
`;

export const StyledBottomText = styled.View`
  flex: 1;
  align-self: center;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  padding-bottom: 20px;
`;
