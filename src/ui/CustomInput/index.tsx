import {Animated, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  ErrorText,
  StyledInputContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledLeftImageContainer,
  StyledRightImageContainer,
  StyledTextInput,
  StyledTextInputContainer,
} from './styles';
import {CustomInputProps, Type} from './types';
import Eye from '../../images/Eye.svg';
import Email from '../../images/Email.svg';
import Lock from '../../images/Lock.svg';

const CustomInput = ({
  type,
  placeholder,
  onChangeText,
  error = false,
  errorText,
  ...props
}: CustomInputProps) => {
  const inputTransY = useRef(new Animated.Value(0));
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showPassword, setShowPassword] = useState<any>(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
    Animated.timing(inputTransY.current, {
      toValue: 10,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
    Animated.timing(inputTransY.current, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handleTextChange = (handleText: string) => {
    setText(handleText);
    if (onChangeText) {
      onChangeText(handleText);
    }
    if (handleText) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue: number) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
  };

  return (
    <>
      <StyledInputContainer $error={error}>
        {type === Type.email && (
          <StyledLeftImageContainer>
            <Email fill={error ? '#EB0057' : '#818181'} />
          </StyledLeftImageContainer>
        )}
        {type === Type.password && (
          <StyledLeftImageContainer>
            <Lock fill={error ? '#EB0057' : '#818181'} />
          </StyledLeftImageContainer>
        )}
        <StyledLabelContainer style={labelStyle}>
          <StyledLabel>{placeholder}</StyledLabel>
        </StyledLabelContainer>
        <StyledTextInputContainer
          style={{transform: [{translateY: inputTransY.current}]}}>
          <StyledTextInput
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={text}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry ? 'newPassword' : props.secureTextEntry
            }
            secureTextEntry={showPassword}
          />
        </StyledTextInputContainer>
        {props.secureTextEntry && !!text && (
          <StyledRightImageContainer>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Eye fill={'#818181'} />
            </TouchableOpacity>
          </StyledRightImageContainer>
        )}
      </StyledInputContainer>
      <ErrorText>{errorText && errorText}</ErrorText>
    </>
  );
};

export default CustomInput;
