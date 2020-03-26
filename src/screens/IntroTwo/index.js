import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Intro } from '../../components';

const IntroTwo = () => (
  <Intro
    sourceOfAnimation="I am the first animation"
    title="Title Two"
    body="Lorem Ipsum"
  />
);

export default IntroTwo;