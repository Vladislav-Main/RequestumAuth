import React from 'react';
import {StyledButtonContainer, StyledPressable} from './styles';
import Icon from '../../images/Back.svg';
import {useNavigation} from '@react-navigation/native';

const IconButton = () => {
  const navigation = useNavigation();

  return (
    <StyledButtonContainer>
      <StyledPressable onPress={() => navigation.goBack()}>
        <Icon fill={'#818181'} />
      </StyledPressable>
    </StyledButtonContainer>
  );
};

export default IconButton;
