import React from 'react';
import {Stack} from '../Stack';
import authStackRoutes from './routes/authStackRoutes';

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        headerTransparent: true,
        gestureEnabled: false,
        headerLeftContainerStyle: {},
      }}>
      {authStackRoutes.map(stackRoute => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
