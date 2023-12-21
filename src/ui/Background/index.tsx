import React from 'react';
import {ChildrenProps} from '../../types';
import {InnerLayout, SafeArea, ScrollArea, StyledLayout} from './styles';
import {HeaderField} from './styles';

import {useNavigation} from '@react-navigation/native';
import IconButton from '../IconButton';
import {Platform} from 'react-native';

const Background = ({children}: ChildrenProps) => {
  const navigation = useNavigation();

  return (
    <StyledLayout
      source={require('../../images/background.png')}
      resizeMode="cover">
      {navigation.canGoBack() && (
        <HeaderField>
          <IconButton />
        </HeaderField>
      )}
      <SafeArea>
        <InnerLayout behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollArea
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            {children}
          </ScrollArea>
        </InnerLayout>
      </SafeArea>
    </StyledLayout>
  );
};

export default Background;
