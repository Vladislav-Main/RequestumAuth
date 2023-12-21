import React from 'react';
import Background from '../../ui/Background';
import UserIcon from '../../images/Component 4.svg';
import HeaderTitle from '../../ui/HeaderTitle';
import HeaderSubtitle from '../../ui/HeaderSubtitle';
import Form from './components/Form';
import {
  StyledBottomText,
  StyledHeaderView,
  StyledLoginView,
  StyledUserIconView,
  StyledWhiteText,
} from './styles';
import DropShadow from 'react-native-drop-shadow';
import LinkString from '../../ui/LinkString';

const LoginScreen = () => {
  return (
    <Background>
      <StyledLoginView>
        <DropShadow
          style={{
            shadowColor: '#EB0057',
            shadowOpacity: 0.5,
            shadowRadius: 8,
          }}>
          <StyledUserIconView>
            <UserIcon />
          </StyledUserIconView>
        </DropShadow>
        <StyledHeaderView>
          <HeaderTitle text={'LOGIN'} />
          <HeaderSubtitle
            text={'Enter your login password from your account'}
          />
        </StyledHeaderView>
        <Form />
      </StyledLoginView>
      <StyledBottomText>
        <StyledWhiteText>Don't have an account?</StyledWhiteText>
        <LinkString to={'SignUpScreen'}> Sign up</LinkString>
      </StyledBottomText>
    </Background>
  );
};

export default LoginScreen;
