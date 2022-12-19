import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Home } from './screens/Home';
import { Schedule } from './screens/Schedule';
import { Event } from './screens/Event';
import { Confirm } from './screens/Confirm';

export const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Event" component={Event} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="Confirm" component={Confirm} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  );
};
