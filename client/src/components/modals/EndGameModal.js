import React from "react";
import { Modal, Text, View } from "react-native";
import styled from 'styled-components/native';
import { Button } from "native-base";
import { connect } from "react-redux";


export const OuterContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const HeadingContainer = styled.View`
    height: 100px;
    justify-content: center;
`;

export const HeadingText = styled.Text`
  font-size: 20px;
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
        presentationStyle={"formSheet"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <OuterContainer>
          <HeadingContainer>
            <HeadingText>
                <Text>Game over</Text>
            </HeadingText>
          </HeadingContainer>
          <MessageContainer>
            <Text>{this.props.message}</Text>
          </MessageContainer>
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