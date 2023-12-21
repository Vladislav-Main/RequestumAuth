import {View} from 'react-native';
import React from 'react';
import CustomInput from '../../../../ui/CustomInput';
import MainButton from '../../../../ui/MainButton';
import {Type} from '../../../../ui/CustomInput/types';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StyledFormView} from './styles';
import LinkString from '../../../../ui/LinkString';
import {FormDataType} from './types';
import {useMeStore} from '../../../../stores/useMeStore';
import useLogin from '../../../../../API/hooks/useLogin';
import {authUserType} from '../../../../stores/types';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

const Form = () => {
  const {login, error} = useLogin();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressSend = (formData: FormDataType) => {
    login(formData.email, formData.password, (user: authUserType) => {
      useMeStore.getState().setUser(user);
    });
  };

  return (
    <StyledFormView>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <CustomInput
            placeholder={'Email'}
            type={Type.email}
            onChangeText={onChange}
            value={value}
            error={!!errors.email}
            errorText={errors.email?.message}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <CustomInput
            placeholder={'Password'}
            type={Type.password}
            onChangeText={onChange}
            value={value}
            error={!!errors.password}
            errorText={error ? error : errors.password?.message}
            secureTextEntry
          />
        )}
        name="password"
      />
      <View>
        <LinkString to="SignUpScreen">{'Forgot password'}</LinkString>
      </View>
      <MainButton
        name={'Login'}
        primary
        error={!!errors}
        onPress={handleSubmit(onPressSend)}
      />
    </StyledFormView>
  );
};

export default Form;
