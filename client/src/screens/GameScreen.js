import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GameHomeScreen from './GameScreen-Home';
import GameQuestionScreen from './GameScreen-Question';
import GameLeaderboardScreen from './GameScreen-Leaderboard';

const Stack = createStackNavigator()

function GameScreen() {
  return (
      <Stack.Navigator 
            initialRouteName='GameHomeScreen'
            screenOptions={{
                gestureEnabled: true,
                headerShown: false
          }}>
        <Stack.Screen 
            name='GameHomeScreen' 
            component={GameHomeScreen} 
        />

        <Stack.Screen
            name='GameLeaderboardScreen'
            component={GameLeaderboardScreen}
        />

        <Stack.Screen
            name='GameQuestionScreen'
            component={GameQuestionScreen}
        />
      </Stack.Navigator>      
  );
}

export default GameScreen;