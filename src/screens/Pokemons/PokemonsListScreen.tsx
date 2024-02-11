import React from 'react';
import {FlatList, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector } from '../../store/hooks';
import { selectPokemonList } from '../../store/counter/pokemonListSlice';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {

  const pokemonList = useAppSelector(selectPokemonList)

  return (
    <View style={[base.card]}>
      <LinearGradient
        key={'Card'}
        colors={['#fff', '#fdf1f1', '#fcf8f1']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}
      >   
        <FlatList
          data={pokemonList}
          renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom:100}}
        />
      </LinearGradient>
    </View>
  );
};
export default PokemonsListScreen;