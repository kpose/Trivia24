import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome';
//import MainNavigator from './MainNavigator';
import MainLayout from '../components/MainLayout';

const Stack = createStackNavigator()

function WelcomeStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            initialRouteName='Welcome'
            screenOptions={{
                gestureEnabled: false,
                headerShown: false
          }}>
        <Stack.Screen 
            name='Home' 
            component={MainLayout} 
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