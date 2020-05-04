import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native'; 

 

const animation = require('../animations/character.json')

function  Welcome(props) {
  const { navigation } = props
  return (
    <Container>
    <AnimationView>
      <LottieView
        source={animation}
        autoPlay
        style={{ width: 400, height: 400 }}
        resizeMode="cover"
      />
    </AnimationView>
    <DescriptionView>
      <IntroTitle>How much do you know?</IntroTitle>
      <IntroText>
      Trivia24 will allow you run a trivia contest for a group of people. One person, the
      admin, will be in control of when a new question is sent to the players. The players will 
      then answer, and a leaderboard will be updated. (Best enjoyed with three or more players)
      </IntroText>
    </DescriptionView>
    <ShadowBox onPress={() => navigation.navigate('Home')}>
        <H1>Enter Game</H1>
     </ShadowBox>
  </Container>
  )
}

export default Welcome; 



export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: #3490dc;
  align-items: center;
  justify-content: center;
`;
 
export const AnimationView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 300px;
`;

export const IntroTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  padding: 16px;
  font-weight: bold;
  line-height: 10px;
  color: #0D0E0E;
`;

export const DescriptionView = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const IntroText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-top: 32px;
  line-height: 26px;
  color: #EBD6EF;
`;

export const H1 = styled.Text`
  font-size: 24px;
  color: #101010
  font-size: 24px;
  font-weight: bold;
`;

export const ShadowBox = styled.TouchableOpacity`
  margin:20px;
  height: 70px;
  width: 200px;
  border-color: #ddd;
  background: #B2E787;
  border-radius: 20px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  justify-content: center;
  align-items: center;
`;



