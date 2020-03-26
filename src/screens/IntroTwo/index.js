import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/questions.json');

const IntroTwo = () => (
  <Intro
    animation={animation}
    title="Title Two"
    body="Lorem Ipsum"
  />
);

export default IntroTwo;