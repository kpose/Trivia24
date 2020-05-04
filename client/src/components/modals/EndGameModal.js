import React from "react";
import { Modal, Text } from "react-native";
import styled from 'styled-components/native';
import { Button } from "native-base";
import { connect } from "react-redux";
import LottieView from 'lottie-react-native';
import CoreCode from "../../../src/CoreCode";

const firework = require('../../animations/firework.json');


export const OuterContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #1F2026;
`; 

export const HeadingContainer = styled.View`
    height: 100px;
    justify-content: center;
`;

export const HeadingText = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

export const MessageContainer = styled.View`
    flex: 1;
    align-self: center;
    justify-content: center;
`;

export const ButtonContainer = styled.View`
  height: 80px;
  align-self: stretch;
  justify-content: center;
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    color: white;
`;



class EndGameModal extends React.Component {
  constructor(inProps) {
    super(inProps);
  }

  render() {
    return (
      <Modal
        presentationStyle={"overFullScreen"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <OuterContainer>
          <HeadingContainer>
            <HeadingText>
                <Text style={{ fontSize: 40, color: "#F1380F", fontWeight: "bold" }}> Game over!! </Text>
            </HeadingText>
          </HeadingContainer>

          
          <MessageContainer>
            <Text style={{ fontSize: 20, color: "#F1C40F", fontWeight: "bold" }}>{this.props.message}</Text>
          </MessageContainer>

          <LottieView
          source={firework}
          autoPlay
          style={{ width: 500, height: 400 }}
          resizeMode="cover"
        />
          <ButtonContainer>
          <Button block onPress={ () => { } }>
              <ButtonText>
                <Text>Ok</Text>
              </ButtonText>
            </Button>
          </ButtonContainer>
        </OuterContainer>
      </Modal>
    );

  }
} 

const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.endGameVisible,
    message : inState.modals.endGameMessage
  };
};

export default connect(mapStateToProps)(EndGameModal);