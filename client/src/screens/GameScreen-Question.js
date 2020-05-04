import React from 'react';
import { Alert, StyleSheet, Text as RNText, View } from "react-native";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import CoreCode from "../CoreCode";
import { answerButtonHighlight } from "../state/actions";
import store from "../state/store";
import styled from 'styled-components/native';


const styles = StyleSheet.create({
  question : {
    fontWeight : "bold",
    fontSize : 26,
    color : "#F1380F",
    textAlign : "center"
  },
 
  answerButton : {
    marginTop : 20
  },

  buttonText : {
    fontWeight : "bold",
    color : "white"
  }
});

export const OuterContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #1F2026;
  align-items: stretch;
  justify-content: center;
`;

export const QuestionContainer = styled.View`
  flex: .2;
  align-self: center;
  justify-content: center;
`;

export const AnswerButtonsContainer = styled.View`
  flex: .8;
  align-items: center;
  justify-content: center;
`;

export const SubmitButtonContainer = styled.View`
  height: 140px;
  justify-content: center;
`;



class GameQuestionScreen extends React.Component {
  constructor(inProps) {
    super(inProps);
  }
  render() {
    return (
      <OuterContainer>
        <QuestionContainer>
          <RNText style={styles.question}>{this.props.question}</RNText>
        </QuestionContainer>
        <AnswerButtonsContainer>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[0]}
            danger={this.props.answerButtonDanger[0]}
            onPress={ () => { store.dispatch(answerButtonHighlight(0)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[0]}
            </Text>
          </Button>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[1]}
            danger={this.props.answerButtonDanger[1]}
            onPress={ () => { store.dispatch(answerButtonHighlight(1)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[1]}
            </Text>
          </Button>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[2]}
            danger={this.props.answerButtonDanger[2]}
            onPress={ () => { store.dispatch(answerButtonHighlight(2)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[2]}
            </Text>
          </Button>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[3]}
            danger={this.props.answerButtonDanger[3]}
            onPress={ () => { store.dispatch(answerButtonHighlight(3)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[3]}
            </Text>
          </Button>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[4]}
            danger={this.props.answerButtonDanger[4]}
            onPress={ () => { store.dispatch(answerButtonHighlight(4)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[4]}
            </Text>
          </Button>
          <Button
            full
            rounded
            style={styles.answerButton}
            primary={this.props.answerButtonPrimary[5]}
            danger={this.props.answerButtonDanger[5]}
            onPress={ () => { store.dispatch(answerButtonHighlight(5)) } }>
            <Text style={styles.buttonText}>
              {this.props.answerButtonLabels[5]}
            </Text>
          </Button>
        </AnswerButtonsContainer>
        <SubmitButtonContainer>
          <Button
            block
            rounded
            success
            large
            onPress={
              () => {
                if (store.getState().question.selectedAnswer === -1) {
                  Alert.alert("Oh C'mon!", "Please select an answer",
                    [ { text : "OK" } ], { cancelable : false }
                  );
                } else {
                  CoreCode.io.emit("submitAnswer", {
                    playerID : store.getState().playerInfo.id,
                    answer : store.getState().question.answerButtonLabels[
                      store.getState().question.selectedAnswer
                    ]
                  });
                }
              }
            }
          >
            <Text style={styles.buttonText}>Submit Answer</Text>
          </Button>
        </SubmitButtonContainer>
      </OuterContainer>
    );

  } 


} 
const mapStateToProps = (inState) => {
  return {
    answerButtonPrimary : inState.question.answerButtonPrimary,
    answerButtonDanger : inState.question.answerButtonDanger,
    answerButtonLabels : inState.question.answerButtonLabels,
    question : inState.question.currentQuestion
  };
};


exports.GameQuestionScreen = connect(mapStateToProps)(GameQuestionScreen);


