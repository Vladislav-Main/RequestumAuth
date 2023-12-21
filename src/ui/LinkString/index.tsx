import {Pressable} from 'react-native';
import React from 'react';
import {StyledLinkingString} from './styles';
import {useNavigation} from '@react-navigation/native';
import {LinkStringProps} from './types';

const LinkString = ({children, to}: LinkStringProps) => {
  const navigation = useNavigation();
  console.log(to);
  return (
    <Pressable onPress={() => navigation.navigate(to)}>
      <StyledLinkingString>{children}</StyledLinkingString>
    </Pressable>
  );
};

export default LinkString;
