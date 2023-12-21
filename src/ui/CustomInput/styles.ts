import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const StyledInputContainer = styled.View<{$error?: boolean}>`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${props =>
    props.$error ? `${props.theme.colors.main}` : `${props.theme.colors.grey}`};
  height: 50px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: center;
`;

export const StyledLeftImageContainer = styled.View``;

export const StyledLabelContainer = styled(Animated.View)`
  position: absolute;
  padding-left: 50px;
`;

export const StyledLabel = styled.Text`
  color: ${props => `${props.theme.colors.lightGrey}`};
  font-size: ${props => `${props.theme.fontSizes.s}`};
`;

export const StyledTextInputContainer = styled(Animated.View)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding-left: 30px;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  color: ${props => `${props.theme.colors.text}`};
  font-size: ${props => `${props.theme.fontSizes.s}`};
  font-weight: 700;
`;

export const ErrorText = styled.Text`
  color: ${props => `${props.theme.colors.main}`};
`;

export const StyledRightImageContainer = styled.View`
  position: absolute;
  align-self: flex-end;
  padding-right: 16px;
`;
