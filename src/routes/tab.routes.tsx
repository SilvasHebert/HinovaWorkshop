import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Indicate} from '../screens/Indicate';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: 'Oficinas',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Indicate"
        options={{
          title: 'Indique um amigo',
          tabBarIcon: ({color, size}) => (
            <Feather name="send" color={color} size={size} />
          ),
        }}
        component={Indicate}
      />
    </Tab.Navigator>
  );
}
