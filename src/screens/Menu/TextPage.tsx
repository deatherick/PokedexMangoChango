import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';

interface ITextPageProps {
    text: string
}

const TextPage: React.FunctionComponent<ITextPageProps> = (props) => {
  return (
    <View style={base.centered}>
      <Text>{props.text}</Text>
    </View>
  );
};
export default TextPage;