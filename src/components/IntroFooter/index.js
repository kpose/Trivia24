import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const IntroFooter = () => (
  <TouchableOpacity style={styles.container}>
    <Text>Hi I am the footer</Text>
  </TouchableOpacity>
);
export default IntroFooter;