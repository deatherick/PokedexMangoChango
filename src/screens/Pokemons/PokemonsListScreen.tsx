import React from 'react';
import {View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={[base.card]}>
          <PokemonCard number='#001' name='Bulbasour' type='Grass' />
          <PokemonCard number='#039' name='JigglyPuff' type='Fairy' />
          <PokemonCard number='#025' name='Pikachu' type='Electric' />
          <PokemonCard number='#007' name='Squirtle' type='Water' />
    </View>
  );
};
export default PokemonsListScreen;