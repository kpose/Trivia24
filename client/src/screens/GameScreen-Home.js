import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function GameHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Screen - Home</Text>
    </View>
  )
}

export default GameHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2026'
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold'
}
})