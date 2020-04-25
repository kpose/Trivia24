import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Body } from "native-base";
import styled from 'styled-components/native';
import { connect } from "react-redux";


class InfoScreen extends React.Component {

  constructor(inProps) {
    super(inProps);
  }  
  render() {

    return (
      <OuterContainer>
        <View style={styles.identificationCardContainer}>
          <Card transparent>
            <CardItem header style={{ backgroundColor:'#DB9A8B'}}>
              <Text style={styles.headerText}>Identification</Text>
            </CardItem>
            <CardItem  style={{ backgroundColor:'#63CC6A'}}>
              <Body>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Player Name:</Text>
                  <Text style={styles.fieldValue}>{this.props.playerName}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Player ID:</Text>
                  <Text style={styles.fieldValue}>{this.props.playerID}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        <View style={styles.currentGameCardContainer}>
          <Card transparent>
            <CardItem header  style={{ backgroundColor:'#DB9A8B'}}>
              <Text style={styles.headerText}>Current Game</Text>
            </CardItem>
            <CardItem  style={{ backgroundColor:'#63CC6A'}}>
              <Body>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Asked:</Text>
                  <Text style={styles.fieldValue}>{this.props.asked}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Answered:</Text>
                  <Text style={styles.fieldValue}>{this.props.answered}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Points:</Text>
                  <Text style={styles.fieldValue}>{this.props.points}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Right:</Text>
                  <Text style={styles.fieldValue}>{this.props.right}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Wrong:</Text>
                  <Text style={styles.fieldValue}>{this.props.wrong}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Total Time:</Text>
                  <Text style={styles.fieldValue}>{this.props.totalTime}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Slowest:</Text>
                  <Text style={styles.fieldValue}>{this.props.slowest}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Fastest:</Text>
                  <Text style={styles.fieldValue}>{this.props.fastest}</Text>
                </View>
                <View style={ styles.fieldContainer }>
                  <Text style={styles.fieldLabel}>Average:</Text>
                  <Text style={styles.fieldValue}>{this.props.average}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

      </OuterContainer>
    );
  } 
}

const styles = StyleSheet.create({
  identificationCardContainer : {
    height : 150,
    marginBottom : 20,
    marginLeft : 15,
    marginRight : 15
  },

  currentGameCardContainer : {
    height : 360,
    marginLeft : 15,
    marginRight : 15
  },

  headerText : {
    fontWeight : "bold",
    fontSize : 20,
    color : "red"
  },

  fieldContainer : {
    flexDirection : "row"
  },

  fieldLabel : {
    width : 100,
    fontWeight : "bold",
    color : "#ffffff"
  },

  fieldValue : {
    fontWeight : "bold"
  },

  fieldSpacing : {
    marginBottom : 12
  }

});

const mapStateToProps = (inState) => {
  return {
    playerName : inState.playerInfo.name,
    playerID : inState.playerInfo.id,
    asked : inState.gameData.asked,
    answered : inState.gameData.answered,
    points : inState.gameData.points,
    right : inState.gameData.right,
    wrong : inState.gameData.wrong,
    totalTime : inState.gameData.totalTime,
    slowest : inState.gameData.slowest,
    fastest : inState.gameData.fastest,
    average : inState.gameData.average
  };
};


export const OuterContainer = styled.View`
  flex: 1;
  background-color: #1F2026;
  justify-content: center;
`;


export default connect(mapStateToProps)(InfoScreen);
