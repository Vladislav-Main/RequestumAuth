import {useCallback, useState} from 'react';
import instance from '../axios/instance';
import {API} from '../API';
import {UseMeStoreState, authUserType} from '../../src/stores/types';
import {useMeStore} from '../../src/stores/useMeStore';
import {useNavigation} from '@react-navigation/native';

const useLogin = () => {
  const [error, setError] = useState<string>('');
  const navigation = useNavigation();
  const userEmail = useMeStore((s: UseMeStoreState) => s.email);
  const userPassword = useMeStore((s: UseMeStoreState) => s.password);

  const login = async (
    email: string,
    password: string,
    successCallback: (user: authUserType) => void,
  ) => {
    try {
      const result = await instance.get(API.AUTH.login);
      const response = result.data;

      if (response && email === userEmail && password === userPassword) {
        setError('');
        successCallback(response);
        navigation.navigate('HomeScreen');
      }
      if (email === userEmail || password === userPassword) {
        setError('Incorrect email or password');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    successCallback: (
      email: string,
      password: string,
      user: authUserType,
    ) => void,
  ) => {
    try {
      const result = await instance.get(API.AUTH.login);
      const response = result.data;

      if (response) {
        setError('');
        successCallback(email, password, response);
        navigation.navigate('HomeScreen');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clear = useCallback(() => {
    setError('');
  }, []);

  return {error, setError, login, signUp, clear};
};

export default useLogin;
