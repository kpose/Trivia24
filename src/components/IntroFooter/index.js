import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './styledComponents';
import Icon from '../Icon';


const IntroFooter = () => (
  <Container>
    <TouchableOpacity>
      <Icon iconName="home" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon iconName="arrowright" />
    </TouchableOpacity>
  </Container>
);
export default IntroFooter;