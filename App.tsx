import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider, MD3DarkTheme} from 'react-native-paper';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import axios from 'axios';

import {AppRoutes} from './src/routes/app.routes';
import colors from './src/styles/colors';
import {AlertNotificationRoot} from 'react-native-alert-notification';

const MyTheme = {
  ...DarkTheme,
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    background: colors.background,
    primary: colors.primary,
  },
};

export function App() {
  axios.defaults.baseURL =
    'http://app.hinovamobile.com.br/ProvaConhecimentoWebApi';

  return (
    <PaperProvider theme={MyTheme}>
      <NavigationContainer theme={MyTheme}>
        <AlertNotificationRoot>
          <StatusBar backgroundColor={colors.background} />
          <AppRoutes />
        </AlertNotificationRoot>
      </NavigationContainer>
    </PaperProvider>
  );
}
