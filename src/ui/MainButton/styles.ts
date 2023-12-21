import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const StyledButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledPressable = styled.Pressable`
  width: 100%;
`;

export const StyledButton = styled(Animated.View)<{primary?: boolean}>`
  background-color: ${props =>
    props.primary
      ? `${props.theme.colors.main}`
      : `${props.theme.colors.grey}`};
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonText = styled.Text`
  font-size: ${props => `${props.theme.fontSizes.s}`};
  font-weight: 700;
  color: ${props => `${props.theme.colors.text}`};
`;
