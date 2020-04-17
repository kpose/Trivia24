import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function GameLeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Screen- Leaderboard</Text>
    </View>
  )
}

export default GameLeaderboardScreen;

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