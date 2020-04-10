import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native';

const styles = StyleSheet.create({

  outerContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: '#1F2026'
  },

  spacer : {
    flex : .2
  },

  textContainer : {
    flex : .15,
    justifyContent : "center",
    alignItems : "center",
    color: '#ffffff',
  },

  textTitle : {
    fontWeight : "bold",
    fontSize : 25,
    color: '#6593F5',
  },

  textVersion : {
    fontWeight : "bold",
    fontSize : 21,
    color: '#ffffff',
  },


  textSource : {
    fontWeight : "bold",
    fontSize : 20,
    color: '#6593F5',
  },


  textAuthor : {
    fontWeight : "bold",
    fontSize : 20,
    color: '#DA584B',
  }

}); 

export const ShadowBox = styled.TouchableOpacity`
  margin:20px;
  height: 50px;
  width: 200px;
  border-color: #ddd;
  background: #ffffff;
  border-radius: 20px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.Text`
  font-size: 14px;
  color: #101010;
  font-weight: bold;
  justify-content: center;
`;


export default class AboutScreen extends React.Component {

  constructor(inProps) {

    super(inProps);

  } 

  render() {

    return (
      <View style={styles.outerContainer}>
        <View style={styles.spacer} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Trivia24 (React Native Trivia App)</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textVersion}>v1.0</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSource}>Published As A Stay Home Companion</Text>
          <Text style={styles.textSource}>During The Corona Pandemic</Text>
          <Text style={styles.textSource}>in 2020</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textAuthor}>By: Jude Ganihu</Text>
        </View>
        <ShadowBox>
          <H1>Send Me A Mail</H1>
          </ShadowBox>
        <View style={styles.spacer} />
        
      </View>
    );

  } 


}

