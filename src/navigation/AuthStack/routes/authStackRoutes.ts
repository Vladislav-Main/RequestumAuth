import {AppStackRoutesType} from '../../types';
import SplashScreen from '../../../screens/SplashScreen';
import LoginScreen from '../../../screens/LoginScreen';
import SignUpScreen from '../../../screens/SignUpScreen';

const appStackRoutes: AppStackRoutesType = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'SignUpScreen',
    component: SignUpScreen,
  },
];

export default appStackRoutes;
