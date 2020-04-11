import React from "react";
import { StyleSheet, Text, View } from "react-native";

function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Info Screen</Text>
    </View>
  )
}

export default InfoScreen;

const styles = StyleSheet.create({

  outerContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: '#1F2026'
  },

  

}); 
