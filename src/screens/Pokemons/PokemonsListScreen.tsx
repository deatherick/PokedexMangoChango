import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={base.centered}>
      <Text>Pokemons</Text>
    </View>
  );
};
export default PokemonsListScreen;