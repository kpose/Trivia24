import React from "react";
import { Button, Modal, Text, View } from "react-native";
import styled from 'styled-components/native';
import { connect } from "react-redux";
import CoreCode from "../../../src/CoreCode";


export const OuterContainer = styled.View`
  flex: 1;
  align-items: center;
  margin: 50px;
  justify-content: center;
  
`;

export const HeadingText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin: 50px; 
`;

export const ButtonContainer = styled.View`
  margin: 50px;
`;

export const CurrentStatusContainer = styled.View`
  margin: 50px;
`;

export const CurrentStatusText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;



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
        <OutsideContainer>
          <HeadingText>
            <Text>Admin</Text>
          </HeadingText>
          <ButtonContainer>
            <Button title="New Game"
              onPress={ () => {
                CoreCode.io.emit("adminNewGame", {});
              } }
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button title="Next Question"
              onPress={ () => {
                CoreCode.io.emit("adminNextQuestion", {});
              } }
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button title="End Game"
              onPress={ () => {
                CoreCode.io.emit("adminEndGame", {});
              } }
            />
          </ButtonContainer>
          <CurrentStatusContainer>
            <Text style={styles.currentStatusText}>
              Current Status: {this.props.currentStatus}
            </Text>
          </CurrentStatusContainer>
        </OutsideContainer>
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