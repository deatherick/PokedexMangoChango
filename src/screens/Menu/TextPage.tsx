import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';

export interface ITextPageProps {
    text: string
}

type Props = DrawerScreenProps<RootStackParamList>;

const TextPage: React.FunctionComponent<Props> = ({navigation, route}) => {

  const {text} = route.params as ITextPageProps
  
  return (
    <View style={base.centered}>
      <Text>{text}</Text>
    </View>
  );
};
export default TextPage;