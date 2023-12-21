import React from 'react';
import Background from '../../ui/Background';
import {
  StyledBottomText,
  StyledHeaderView,
  StyledLoginView,
  StyledUserIconView,
  StyledWhiteText,
} from './styles';
import DropShadow from 'react-native-drop-shadow';
import UserIcon from '../../images/Component 4.svg';
import HeaderTitle from '../../ui/HeaderTitle';
import HeaderSubtitle from '../../ui/HeaderSubtitle';
import Form from './components/Form';
import LinkString from '../../ui/LinkString';

const SignUpScreen = () => {
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
          <HeaderTitle text={'SIGN UP'} />
          <HeaderSubtitle
            text={'Create your email and  password for your account'}
          />
        </StyledHeaderView>
        <Form />
      </StyledLoginView>
      <StyledBottomText>
        <StyledWhiteText>Already have an account? </StyledWhiteText>
        <LinkString to={'LoginScreen'}> Log in</LinkString>
      </StyledBottomText>
    </Background>
  );
};

export default SignUpScreen;
