import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/enlightened.json');

const IntroThree = () => (
  <Intro
    animation={animation}
    title="Title Three"
    body="Lorem Ipsum"
  />
);

export default IntroThree;