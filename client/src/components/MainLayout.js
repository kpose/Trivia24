import React from "react";
import { StyleSheet, View } from "react-native";
import MainNavigator from '../routes/MainNavigator';


import NamePromptModal from "./modals/NamePromptModal";


const styles = StyleSheet.create({
  outerContainer : {
    flex : 1
  }

});


export default class MainLayout extends React.Component {

  constructor(inProps) {
    super(inProps);
  } 

  render() {
    return (
      <View style={styles.outerContainer}>
        <NamePromptModal />
        <MainNavigator />
      </View>
    );

  }
} 