import React from 'react';
import { Intro } from '../../components/walkthrough';

const animation = require('../../animations/questions.json');

const IntroTwo = () => (
  <Intro
    animation={animation}
    title="Title Two"
    body="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  />
);

export default IntroTwo;