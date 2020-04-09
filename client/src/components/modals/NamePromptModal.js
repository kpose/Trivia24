import React from "react";
import { Modal, View } from "react-native";
import styled from 'styled-components/native';
import { Button, Item, Input, Label, Switch, Text } from "native-base";
import { connect } from "react-redux";
import CoreCode from "../../../src/CoreCode";
import { setPlayerName, setIsAdmin } from "../../state/actions";
import store from "../../state/store";


export const outsideContainer = styled.View`
  flex: 1;
  align-items: center;
  margin: 20px;
  justify-content: center;
`;

export const headingContainer = styled.View`
    height : 100px;
    justify-content : center;
`;

export const headingText = styled.Text`
    font-size : 20px;
    font-weight : bold;
`;

export const inputFieldContainer = styled.View`
    flex : 1;
    justify-content : center;
    align-self : stretch;
`;

export const switchContainer = styled.View`
    margin-top : 40px;
    justify-content : center;
    flex-direction : row;
`;

export const buttonContainer = styled.View`
    height : 80px;
    justify-content : center;
    align-self : stretch;
`;


class NamePromptModal extends React.Component {
  constructor(inProps) {
    super(inProps);
  } 

  render() {
    return (
      <Modal
        presentationStyle={"formSheet"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }>
        <outsideContainer>
          <headingContainer>
            <headingText>Hello, new player!</headingText>
          </headingContainer>
          <inputFieldContainer>
            <Item floatingLabel>
              <Label>Please enter your name</Label>
              <Input
                onChangeText={
                  (inText) => store.dispatch(setPlayerName(inText))
                }
              />
            </Item>
            <switchContainer>
              <View>
                <Switch
                  value={this.props.isAdmin}
                  onValueChange={
                    (inValue) => store.dispatch(setIsAdmin(inValue))
                  }
                />
              </View>
              <View style={{ paddingLeft : 10 }}>
                <Text>I am the admin</Text>
              </View>
            </switchContainer>
          </inputFieldContainer>
          <View style={styles.buttonContainer}>
            <Button block onPress={CoreCode.startup}><Text>Ok</Text></Button>
          </View>
        </outsideContainer>
      </Modal>
    );
  } 
} 

const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.namePromptVisible,
    isAdmin : inState.modals.isAdmin
  };
};

export default connect(mapStateToProps)(NamePromptModal);