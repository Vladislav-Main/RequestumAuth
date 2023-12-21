import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist} from 'zustand/middleware';
import {UseMeStoreState, authUserType} from './types';

export const useMeStore = create(
  persist<UseMeStoreState>(
    (set, get) => ({
      status: 'init',
      success: false,
      email: '',
      password: '',
      user: null as authUserType,
      setUser: async (user: authUserType) => {
        set({
          user,
        });
        await AsyncStorage.setItem('email', user?.email as string);
      },
      setRegUser: async (email, password, user: authUserType) => {
        set({email, password, user});
        await AsyncStorage.setItem('email', user?.email as string);
      },
      logout: async () => {
        await AsyncStorage.setItem('email', '');
        set({
          status: 'anAuthenticated',
          success: false,
          // email: '',
          user: null as authUserType,
        });
      },
    }),
    {
      name: 'use-me-store',
      getStorage: () => AsyncStorage,
    },
  ),
);
