import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { connect } from "react-redux";


class InfoScreen extends React.Component {

  constructor(inProps) {
    super(inProps);

  }  
  render() {

    return (
      <View style={styles.outerContainer}>

        <View style={styles.identificationCardContainer}>
          <Card transparent>
            <CardItem header>
              <Text style={styles.headerText}>Identification</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Player Name</Text>
                  <Text>{this.props.playerName}</Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Player ID</Text>
                  <Text>{this.props.playerID}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        <View style={styles.currentGameCardContainer}>
          <Card>
            <CardItem header>
              <Text style={styles.headerText}>Current Game</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Asked</Text>
                  <Text>{this.props.asked}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Answered</Text>
                  <Text>{this.props.answered}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Points</Text>
                  <Text>{this.props.points}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Right</Text>
                  <Text>{this.props.right}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Wrong</Text>
                  <Text>{this.props.wrong}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Total Time</Text>
                  <Text>{this.props.totalTime}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Slowest</Text>
                  <Text>{this.props.slowest}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Fastest</Text>
                  <Text>{this.props.fastest}</Text>
                </View>
                <View style={ styles.fieldContainer }>
                  <Text style={styles.fieldLabel}>Average</Text>
                  <Text>{this.props.average}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

      </View>
    );

  } 


}

const styles = StyleSheet.create({

  outerContainer : {
    justifyContent : "center",
    marginTop : 50,
    marginLeft : 20,
    marginRight : 20
  },


  identificationCardContainer : {
    height : 150,
    marginBottom : 20
  },

  currentGameCardContainer : {
    height : 360
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


export default connect(mapStateToProps)(InfoScreen);
