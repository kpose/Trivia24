import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import store from "../state/store";
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  headingText : {
    fontSize : 34,
    fontWeight : "bold",
    color: "#eb8c34"
  },

  awaitingQuestionContainer : {
    flex : .4
  },

  awaitingQuestionWebView : {
    backgroundColor : "transparent"
  }
});

export const OuterContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #1F2026;
  align-items: stretch;
  justify-content: center;
`;

export const HeadingContainer = styled.View`
  height: 150px;
  justify-content: center;
  align-self: center;
`;

export const ListContainer = styled.View`
  flex: .6;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  border-color: #9acd32;
  border-width: 2px;
  padding: 10px;
`;

const awaitingQuestionSpinStyles = `
.spinText {
  animation-name : spin, depth;
  animation-timing-function : linear;
  animation-iteration-count : infinite;
  animation-duration : 6s;
  text-align : center;
  font-weight : bold;
  color : #F1C40F;
  font-size : 34pt;
  padding-top : 100px;
}
@keyframes spin {
  from { transform : rotateY(0deg); }
  to { transform : rotateY(-360deg); }
}
@keyframes depth {
  0 { text-shadow : 0 0 black; }
  25% { text-shadow : 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black; }
  50% { text-shadow : 0 0 black; }
  75% { text-shadow : -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black, -5px 0 black; }
  100% { text-shadow : 0 0 black; }
}
`;


const awaitingQuestionHTML = `
<style>${awaitingQuestionSpinStyles}</style>
<div class="spinText">Awaiting Question From Admin</div>
`;


class GameLeaderboardScreen extends React.Component {

  constructor(inProps) {
    super(inProps);
  } 
  render() {
    return (
      <OuterContainer>
        <HeadingContainer>
          <Text style={styles.headingText}>Current Leaderboard</Text>
        </HeadingContainer>
        <ListContainer>

          <FlatList
            data={this.props.listData}
            keyExtractor={ (inItem) => inItem.playerID }
            renderItem={ ({item}) => {
              return (
                <View style={{ flex : 1, flexDirection : "row" }}>
                  <View style={{ flex : .6 }}>
                    <Text style={{ fontSize : 20, color: "#ffffff" }}>{item.playerName}
                    {store.getState().playerInfo.id === item.playerID ? " (YOU)" : ""}</Text>
                  </View>
                  <View style={{ flex : .4 }}>
                    <Text style={{ fontSize : 20, color: "#f00e25" }}>{item.points} points</Text>
                  </View>
                </View>
              );
            } }
          />
        </ListContainer>

        <View style={styles.awaitingQuestionContainer}>
          <WebView
            originWhitelist={['*']}
            style={styles.awaitingQuestionWebView}
            source={{ html : awaitingQuestionHTML }}
          />
        </View>
      </OuterContainer>
    );

  } 


} 


const mapStateToProps = (inState) => {
console.log("inState", inState);
  return { listData : inState.leaderboard.listData };
};


exports.GameLeaderboardScreen = connect(mapStateToProps)(GameLeaderboardScreen);