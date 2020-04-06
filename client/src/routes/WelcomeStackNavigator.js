import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import Welcome from '../screens/Welcome';


const Stack = createStackNavigator()

function WelcomeStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            initialRouteName='Welcome'
            screenOptions={{
                gestureEnabled: true,
                headerShown: false
          }}>
        <Stack.Screen 
            name='Home' 
            component={Home} 
        />

        <Stack.Screen
            name='Welcome'
            component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default WelcomeStackNavigator;