import React from 'react';
import Theme from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack/AppStack';
import AuthStack from './src/navigation/AuthStack/AuthStack';
import {useMeStore} from './src/stores/useMeStore';
import {UseMeStoreState} from './src/stores/types';

function App(): React.JSX.Element {
  const user = useMeStore((s: UseMeStoreState) => s.user);
  return (
    <Theme>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Theme>
  );
}

export default App;
