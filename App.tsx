import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {AppRoutes} from './src/routes/app.routes';
import axios from 'axios';

export function App() {
  axios.defaults.baseURL =
    'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi';

  return (
    <NavigationContainer>
      <StatusBar />
      <AppRoutes />
    </NavigationContainer>
  );
}
