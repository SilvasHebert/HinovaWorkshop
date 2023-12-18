import React from 'react';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Workshop} from '../screens/Home';
import {WorkshopDetails} from '../screens/WorkshopDetails';
import TabRoutes from './tab.routes';

export type AppNavigation = {
  Tab: undefined;
  WorkshopDetails: Workshop;
};

export type AppTypes = NativeStackNavigationProp<AppNavigation>;

const Stack = createNativeStackNavigator<AppNavigation>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        options={{title: 'Oficinas'}}
        component={TabRoutes}
      />
      <Stack.Screen
        name="WorkshopDetails"
        options={{title: 'Detalhes da Oficina'}}
        component={WorkshopDetails}
      />
    </Stack.Navigator>
  );
}
