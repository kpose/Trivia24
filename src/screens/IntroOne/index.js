import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Intro } from '../../components';

const IntroOne = () => (
  <Intro
    sourceOfAnimation="I am the first animation"
    title="Title One"
    body="Lorem Ipsum"
  />
);

export default IntroOne;