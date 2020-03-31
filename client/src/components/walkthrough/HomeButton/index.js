import React from 'react';
import LottieView from 'lottie-react-native';
import {
  Container,
  IntroTitle,
  AnimationView,
  DescriptionView,
} from './styledComponents';
 
const HomeButton = ({ animation, title }) => (
  <Container>
    <AnimationView>
      <LottieView
        source={animation}
        autoPlay
        style={{ width: 100, height: 150 }}
        resizeMode="cover"
      />
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
    </DescriptionView>
  </Container>
);

export default HomeButton;