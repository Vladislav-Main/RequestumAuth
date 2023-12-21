import {TextInputProps} from 'react-native';

export enum Type {
  email,
  password,
}

export type CustomInputProps = TextInputProps & {
  type: Type.email | Type.password;
  placeholder: string;
  error: boolean;
  errorText?: string;
};
