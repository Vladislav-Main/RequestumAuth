import React from 'react';
import Background from '../../ui/Background';
import MainButton from '../../ui/MainButton';
import {ButtonField, LogoField} from './styles';
import Logo from '../../images/Logo.svg';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <LogoField>
        <Logo />
      </LogoField>
      <ButtonField>
        <MainButton
          name={'Login'}
          primary
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
        <MainButton
          name={'Register'}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </ButtonField>
    </Background>
  );
};

export default SplashScreen;
