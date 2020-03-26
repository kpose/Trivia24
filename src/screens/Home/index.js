import React from 'react';
import { Container, Text, Tap } from './styledComponents';
import LottieView from 'lottie-react-native';


const adminAnimation = require('../../animations/judgement.json');
const playerAnimation = require('../../animations/enlightened.json');

const Home = () => (
  <Container>
     <Tap>
     <LottieView
        source={adminAnimation}
        autoPlay
        style={{ width: 250, height: 250 }}
        resizeMode="cover"
      />
     </Tap>
    <Text>Enter as Admin</Text>

     <Tap>
     <LottieView
        source={playerAnimation}
        autoPlay
        style={{ width: 250, height: 250 }}
        resizeMode="cover"
      />
     </Tap>
    <Text>Enter as Player</Text>
  </Container>
);

export default Home;