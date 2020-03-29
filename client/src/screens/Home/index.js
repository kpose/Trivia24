import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

const adminAnimation = require('../../animations/judgement.json');
const playerAnimation = require('../../animations/enlightened.json');

const Home = () => (
  <Container>
     <ShadowBox>
        <LottieView
            source={adminAnimation}
            autoPlay
            resizeMode="cover"
        />
     </ShadowBox>
    <H1>Enter as Admin</H1>

    <ShadowBox>
        <LottieView
            source={playerAnimation}
            autoPlay
            resizeMode="cover"
        />
    </ShadowBox>
    <H1>Enter as Player</H1>
  </Container>
);

export default Home;



export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.Text`
  font-size: 24px;
`;

export const ShadowBox = styled.TouchableOpacity`
  margin:10px;
  height: 250px;
  width: 250px;
  border-color: #ddd;
  background: #e6ebf0;
  border-radius: 20px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
`;