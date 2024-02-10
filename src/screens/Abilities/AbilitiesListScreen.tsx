import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';

export interface IAbilitiesListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const AbilitiesListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={base.centered}>
      <Text>Abilities</Text>
    </View>
  );
};
export default AbilitiesListScreen;