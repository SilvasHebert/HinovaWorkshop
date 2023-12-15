import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {AppRoutes} from './src/routes/app.routes';
import axios from 'axios';
import {PaperProvider} from 'react-native-paper';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export function App() {
  axios.defaults.baseURL =
    'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi';

  return (
    <PaperProvider>
      <NavigationContainer theme={MyTheme}>
        <StatusBar />
        <AppRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
