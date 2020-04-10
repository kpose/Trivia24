import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Feather';

import AboutScreen  from '../screens/AboutScreen';
import GameScreen  from '../screens/GameScreen';
import InfoScreen  from '../screens/InfoScreen';


const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#02539a",
                inactiveTintColor: "#BDABA5"
        }}
        tabBar={props => (
        <TabBar
            activeColors={"#ffffff"}
            activeTabBackgrounds={"#30735E"}
            tabBarBackground={'#20261F'}
            {...props}
        />
        )}
    >
      <Tab.Screen
        name="Play"
        component={GameScreen}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Icon
                    name="home"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
      }}
      />

    <Tab.Screen
            name="Info"
            component={InfoScreen}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="map"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
        }}
        />

    <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="info"
                        size={size ? size : 24}
                        color={focused ? color : "#222222"}
                        focused={focused}
                        color={color}
                    />
                )
        }}
        />
    </Tab.Navigator>
  );
}

export default MainNavigator;