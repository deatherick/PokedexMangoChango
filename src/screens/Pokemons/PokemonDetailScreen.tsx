import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { PokemonTypesColors } from '../../components/PokemonCard';
import { useAppSelector } from '../../store/hooks';
import { selectPokemon } from '../../store/counter/pokemonSlice';

export interface IPokemonDetailScreenProps {
  name: string
  image: string
  type: string
}

const PokemonDetailScreen: React.FunctionComponent = () => {
  const pokemon = useAppSelector(selectPokemon)
  if (!pokemon) {
    return <View style={base.centered}><Text>No Pokemon selected</Text></View>
  }
  const {name, image, type} = pokemon

  return (
    <LinearGradient
      colors={PokemonTypesColors[type.toUpperCase()]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}
      >    
      <View style={base.centered}>
        <Text>{name}</Text>
        <SvgUri
            width={80}
            height={80}
            uri={image}
        />
      </View>
    </LinearGradient>
  );
};
export default PokemonDetailScreen;