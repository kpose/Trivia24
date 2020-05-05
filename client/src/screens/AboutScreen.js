import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import styled from 'styled-components/native';
import * as MailComposer from 'expo-mail-composer';


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

  sendMail = async () => {
    try {
      const { status } = await MailComposer.composeAsync({
        subject: 'Hello Jude',
        recipients: ['ganihujude@gmail.com'],
        isHtml: true,
      });
      if (status === 'sent') {
        Alert.alert('Mail Successfully Sent!');
      } else {
        throw new Error(`Status: ${status}`);
      }
    } catch (e) {
      Alert.alert('Mail Not Sent: ', e.message);
    }
  }

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
          <Text style={styles.textSource}>During The Corona Virus Pandemic</Text>
          <Text style={styles.textSource}>in 2020</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textAuthor}>By: Jude Ganihu</Text>
        </View>
        <ShadowBox onPress= {this.sendMail}>
          <H1>Get In Touch</H1>
          </ShadowBox>
        <View style={styles.spacer} />
        
      </View>
    );
  } 
}

