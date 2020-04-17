import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';
import CoreCode from '../CoreCode';

const winner = require('../animations/winner.json');
const challenge = require('../animations/challange.json');


export default class GameHomeScreen extends React.Component {

  constructor(inProps) {
    super(inProps);
    CoreCode.mainNavigator = inProps.navigation;
  } 

  render() {
    return(
      <Container>

        <LottieView
          source={challenge}
          autoPlay
          style={{ width: 120, height: 120 }}
          resizeMode="cover"
        />

        <LottieView
          source={winner}
          autoPlay
          style={{ width: 400, height: 400 }}
          resizeMode="cover"
        />
      </Container>
    )
  }

} 

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: #1F2026;
  align-items: center;
  justify-content: center;
`;
