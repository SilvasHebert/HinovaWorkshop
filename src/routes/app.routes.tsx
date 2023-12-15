import React from 'react';

import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {Home, Workshop} from '../screens/Home';
import {WorkshopDetails} from '../screens/WorkshopDetails';
import {Indicate} from '../screens/Indicate';

export type AppNavigation = {
  Home: undefined;
  WorkshopDetails: Workshop;
  Indicate: undefined;
};

export type AppTypes = NativeStackNavigationProp<AppNavigation>;

const Stack = createNativeStackNavigator<AppNavigation>();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{title: 'Oficinas'}}
        component={Home}
      />
      <Stack.Screen
        name="WorkshopDetails"
        options={{title: 'Detalhes da Oficina'}}
        component={WorkshopDetails}
      />
      <Stack.Screen
        name="Indicate"
        options={{title: 'Indique um amigo'}}
        component={Indicate}
      />
    </Stack.Navigator>
  );
}
