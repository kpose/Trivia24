import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  IntroText,
  IntroTitle,
  AnimationView,
  DescriptionView,
} from './styledComponents';

const Intro = ({ sourceOfAnimation, title, body }) => (
  <Container>
    <AnimationView>
      <Text>{sourceOfAnimation}</Text>
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
      <IntroText>{body}</IntroText>
    </DescriptionView>
  </Container>
);

export default Intro;