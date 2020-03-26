import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Home = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;