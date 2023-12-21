import {Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonText,
  StyledPressable,
} from './styles';
import {MainButtonProps} from './types';
import DropShadow from 'react-native-drop-shadow';

const MainButton = ({name, primary, error, onPress}: MainButtonProps) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, [animatedScale]);

  const handleButtonPress = () => {
    onPress();
    if (error) {
      animatedScale.setValue(0.8);
      Animated.spring(animatedScale, {
        toValue: 1,
        bounciness: 24,
        speed: 20,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <StyledButtonContainer>
      <StyledPressable onPress={handleButtonPress}>
        {primary ? (
          <DropShadow
            style={{
              shadowColor: '#EB0057',
              shadowOpacity: 0.5,
              shadowRadius: 8,
            }}>
            <StyledButton
              primary={primary}
              style={{transform: [{scale: animatedScale}]}}>
              <StyledButtonText>{name}</StyledButtonText>
            </StyledButton>
          </DropShadow>
        ) : (
          <StyledButton
            primary={primary}
            style={{transform: [{scale: animatedScale}]}}>
            <StyledButtonText>{name}</StyledButtonText>
          </StyledButton>
        )}
      </StyledPressable>
    </StyledButtonContainer>
  );
};

export default MainButton;
