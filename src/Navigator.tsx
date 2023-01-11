import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import Home from './screens/Home'
import Schedule from './screens/Schedule'
import Event from './screens/Event'
import EventConfirm from './screens/EventConfirm'

export const Navigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Schedule' component={Schedule} />
      <Stack.Screen
        name='Event'
        component={Event}
        options={({ route }: { route: RouteProp<any, string> }) => ({ title: route.params?.title })}
      />
      <Stack.Screen
        name='EventConfirm'
        component={EventConfirm}
        options={({ route }: { route: RouteProp<any, string> }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  )
}
