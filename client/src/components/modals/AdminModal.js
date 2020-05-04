import React from "react";
import { Modal, Text, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { connect } from "react-redux";
import CoreCode from "../../../src/CoreCode";


export const OuterContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1F2026;
  
`;

export const HeadingText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin: 50px; 
  color: #fff;
`;

export const ButtonContainer = styled.View`
  margin: 50px;
`;

export const CurrentStatusContainer = styled.View`
  margin: 50px;
`;

export const NewGame = styled.TouchableOpacity`
  margin:20px;
  height: 90px;
  width: 350px;
  border-color: #ddd;
  background: #9acd32;
  border-radius: 20px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const NextQuestion = styled.TouchableOpacity`
  margin:20px;
  height: 90px;
  width: 350px;
  border-color: #ddd;
  background: #8E44AD; 
  border-radius: 20px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const EndGame = styled.TouchableOpacity`
  margin:20px;
  height: 90px;
  width: 350px;
  border-color: #ddd;
  background: #D23727;
  border-radius: 20px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.Text`
  font-size: 20px;
  color: #101010;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  currentStatusText : {
    fontSize : 20,
    fontWeight : "bold",
    color : "#F1C40F"
  }
});


class AdminModal extends React.Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <Modal
        presentationStyle={"fullScreen"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <OuterContainer>
          <HeadingText>
            <Text>Admin</Text>
          </HeadingText>
          <NewGame onPress={ () => {
                CoreCode.io.emit("adminNewGame", {});
              } }> 
              <H1>New Game</H1>
          </NewGame>

          <NextQuestion onPress={ () => {
                CoreCode.io.emit("adminNextQuestion", {});
              } }>
            <H1>Next Question</H1>
          </NextQuestion>

          <EndGame onPress={ () => {
                CoreCode.io.emit("adminEndGame", {});
              } }>
            <H1>End Game</H1>
          </EndGame>

          <CurrentStatusContainer>
            <Text style={styles.currentStatusText}>
              Current Status: {this.props.currentStatus}
            </Text>
          </CurrentStatusContainer>
        </OuterContainer>
      </Modal> 
    );

  } 
} 


const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.adminVisible,
    currentStatus : inState.modals.currentStatus
  };
};

export default connect(mapStateToProps)(AdminModal);


