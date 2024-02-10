import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';

export interface IMovesListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const MovesListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={base.centered}>
      <Text>Moves</Text>
    </View>
  );
};
export default MovesListScreen;