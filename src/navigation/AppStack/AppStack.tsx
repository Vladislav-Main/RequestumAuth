import React from 'react';
import {Stack} from '../Stack';
import appStackRoutes from './routes/appStackRoutes';

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        headerTransparent: true,
        gestureEnabled: false,
        headerLeftContainerStyle: {},
      }}>
      {appStackRoutes.map(stackRoute => (
        <Stack.Screen key={stackRoute.name} {...stackRoute} />
      ))}
    </Stack.Navigator>
  );
};

export default AppStack;
