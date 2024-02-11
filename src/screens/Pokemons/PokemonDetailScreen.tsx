import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { PokemonTypesColors } from '../../components/PokemonCard';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export interface IPokemonDetailScreenProps {
  name: string
  image: string
  type: string
}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonDetailScreen: React.FunctionComponent = () => {

  if (!useAppSelector((state) => state.pokemon.value)) {
    return <Text>Not Defined</Text>
  }

  const {name, image, type} = useAppSelector((state) => state.pokemon.value) as IPokemonDetailScreenProps

  //const {name, image, type} = route.params as IPokemonDetailScreenProps

  console.log(name)

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