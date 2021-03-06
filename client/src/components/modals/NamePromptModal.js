import React from "react";
import { Modal, View, TextInput, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { Button, Item, Input, Label, Switch, Text, Form } from "native-base";
import { connect } from "react-redux";
import CoreCode from "../../../src/CoreCode";
import { setPlayerName, setIsAdmin } from "../../state/actions";
import store from "../../state/store";


export const OutsideContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #EBEFE7;
  justify-content: center;
  
`;

export const HeadingContainer = styled.View`
    height : 100px;
    justify-content : center;
    
`;

export const HeadingText = styled.Text`
    font-size : 20px;
    font-weight : bold;
`;

export const InputFieldContainer = styled.View`
    flex : 1;
    justify-content : center;
    align-self : stretch;
`;

export const SwitchContainer = styled.View`
    margin-top : 40px;
    justify-content : center;
    flex-direction : row;
`;

export const ButtonContainer = styled.View`
    height : 80px;
    justify-content : center;
    align-self : stretch;
`;

const styles = StyleSheet.create({
  textInputStyle: {
  color: 'white',
  }
});

class NamePromptModal extends React.Component {
  constructor(inProps) {
    super(inProps);
  } 

  render() {
    return (
      <Modal
        presentationStyle={"overFullScreen"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }>
        <OutsideContainer>
          <HeadingContainer>
            <HeadingText>
              <Text style={{ fontSize: 40, color: "#F1380F", fontWeight: "bold" }}>Hello, Champion!</Text>
            </HeadingText>
          </HeadingContainer>
          <InputFieldContainer>
          <Form>
            <Item floatingLabel >
              <Label>Please enter your name</Label>
              <Input
                onChangeText={
                  (inText) => store.dispatch(setPlayerName(inText))
                }
              />
            </Item>
            </Form>
            <SwitchContainer>
              <View>
                <Switch
                  value={this.props.isAdmin}
                  onValueChange={
                    (inValue) => store.dispatch(setIsAdmin(inValue))
                  }
                />
              </View>
              <View style={{ paddingLeft : 10 }}>
                <Text style={{ fontSize: 20, color: "#356112", fontWeight: "bold"}}>I am the admin</Text>
              </View>
            </SwitchContainer>
          </InputFieldContainer>
          <ButtonContainer>
            <Button block onPress={CoreCode.startup}><Text>Continue</Text></Button>
          </ButtonContainer>
        </OutsideContainer>
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