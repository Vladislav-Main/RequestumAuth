import React from 'react';
import CustomInput from '../../../../ui/CustomInput';
import MainButton from '../../../../ui/MainButton';
import {Type} from '../../../../ui/CustomInput/types';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StyledFormView} from './styles';
import useLogin from '../../../../../API/hooks/useLogin';
import {FormDataType} from '../../../LoginScreen/components/Form/types';
import {authUserType} from '../../../../stores/types';
import {useMeStore} from '../../../../stores/useMeStore';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
});

const Form = () => {
  const {signUp} = useLogin();

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
    signUp(
      formData.email,
      formData.password,
      (email: string, password: string, user: authUserType) => {
        useMeStore.getState().setRegUser(email, password, user);
      },
    );
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
            placeholder={'Email address'}
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
            errorText={errors.password?.message}
            secureTextEntry
          />
        )}
        name="password"
      />
      <MainButton
        name={'Sign Up'}
        primary
        error={!!errors}
        onPress={handleSubmit(onPressSend)}
      />
    </StyledFormView>
  );
};

export default Form;
