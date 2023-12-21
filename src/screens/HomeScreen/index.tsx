import React from 'react';
import MainButton from '../../ui/MainButton';
import {useMeStore} from '../../stores/useMeStore';
import {UseMeStoreState} from '../../stores/types';
import Letter_R from '../../images/Letter R.svg';
import BackgroundWithoutPadding from '../../ui/BackgroundWithoutPadding';
import {ButtonField, InnerArea, StyledAboutView} from './styles';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Info from './components/Info';

const LoginScreen = () => {
  const logout = useMeStore((s: UseMeStoreState) => s.logout);
  const user = useMeStore((s: UseMeStoreState) => s.user);

  return (
    <BackgroundWithoutPadding>
      <Letter_R style={{position: 'absolute'}} />
      <InnerArea>
        <StyledAboutView>
          <Subtitle name={'You’re logged in now'} />
          {user && <Title name={user.name} />}
          <Info />
        </StyledAboutView>
        <ButtonField>
          <MainButton name={'Log out'} primary onPress={logout} />
        </ButtonField>
      </InnerArea>
    </BackgroundWithoutPadding>
  );
};

export default LoginScreen;
