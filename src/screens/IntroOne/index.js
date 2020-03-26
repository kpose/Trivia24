import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const IntroOne = () => (
  <View style={styles.container}>
    <Text>IntroOne</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default IntroOne;