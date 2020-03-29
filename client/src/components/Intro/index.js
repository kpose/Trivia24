import React from 'react';
import LottieView from 'lottie-react-native';
import {
  Container,
  IntroText,
  IntroTitle,
  AnimationView,
  DescriptionView,
} from './styledComponents';
 
const Intro = ({ animation, title, body }) => (
  <Container>
    <AnimationView>
      <LottieView
        source={animation}
        autoPlay
        style={{ width: 400, height: 350 }}
        resizeMode="cover"
      />
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
      <IntroText>{body}</IntroText>
    </DescriptionView>
  </Container>
);

export default Intro; 