import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';


const animation = require('./src/animations/welcome.json')

export default function App() {
  return (
    <Welcome
    animation={animation}
    title="Title One"
    body="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});