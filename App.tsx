import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar />
    </NavigationContainer>
  );
}
