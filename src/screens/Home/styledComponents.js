
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

export const Text = styled.Text`
  font-size: 24px;
`;

export const Tap = styled.TouchableOpacity`
  margin:12px;
  padding: 12px;
  height: 250px;
  width: 250px;
  border-width:1px;
  border-color: #ddd;
  background: #e6ebf0;
  border-radius: 5px;
  shadow-color: #000000;
  shadow-opacity: 0.4;
  shadow-radius: 2px;
  elevation: 3;
`;