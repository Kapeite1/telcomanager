import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Graph from '../Graph';

const Stack = createStackNavigator();

export default function Routes() {
 return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Graph" component={Graph} options={{headerShown: false}}/>
  </Stack.Navigator>
  );
}