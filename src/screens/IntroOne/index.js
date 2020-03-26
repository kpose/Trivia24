import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/trivia.json');

const IntroOne = () => (
  <Intro
    animation={animation}
    title="Title One"
    body="Lorem Ipsum"
  />
);

export default IntroOne;