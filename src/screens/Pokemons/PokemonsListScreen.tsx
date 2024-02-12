import React, { useEffect } from 'react';
import {FlatList, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import PokemonCard from '../../components/PokemonCard';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearState, getPokemonData, selectPokemonList } from '../../store/counter/pokemonListSlice';

export interface IPokemonsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {

  const {value:pokemons, status, offset} = useAppSelector((state) => state.pokemonList);
  const dispatch = useAppDispatch()
  //const pokemonOrderedList = [...pokemonList].slice().sort((a,b) => a.id - b.id)

  useEffect(() => {   
    if (status == 'idle') {
        //dispatch(getPokemonData({length: 10, offset:0}));
    }
  }, [status])

  useEffect(() => {
    return () => {
        dispatch(clearState());
    };
}, [])

  function appendData(): void {
    console.log('adding data');
    dispatch(getPokemonData({length: 10, offset: offset}));
  }

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
          data={pokemons}
          renderItem={({item}) => <PokemonCard key={item.id} pokemon={item} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom:100}}
          onEndReachedThreshold={0.5}
          onEndReached={(): void => { appendData(); }}
        />
      </LinearGradient>
    </View>
  );
};
export default PokemonsListScreen;