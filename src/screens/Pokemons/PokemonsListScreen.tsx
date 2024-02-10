import React from 'react';
import {FlatList, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const DATA = [
  {
    number: 1,
    name: 'Bulbasour',
    type: 'Grass'
  },
  {
    number: 39,
    name: 'JigglyPuff',
    type: 'Fairy'
  },
  {
    number: 25,
    name: 'Pikachu',
    type: 'Electric'
  },
  {
    number: 7,
    name: 'Squirtle',
    type: 'Water'
  },
  {
    number: 37,
    name: 'Vulpix',
    type: 'Fire'
  },
];

const PokemonsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={[base.card]}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <PokemonCard number={item.number} name={item.name} type={item.type} />}
          keyExtractor={item => item.number.toString()}
        />
    </View>
  );
};
export default PokemonsListScreen;