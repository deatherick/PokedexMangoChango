import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { PokemonTypesColors } from '../../components/PokemonCard';
import { useAppSelector } from '../../store/hooks';
import { selectPokemon } from '../../store/counter/pokemonSlice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackParamList } from '../../../App';

export interface IPokemonDetailScreenProps {}

const TestRoute = () => <View style={base.centered}><Text>Test</Text></View>;

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const PokemonDetailScreen: React.FunctionComponent = () => {
  const pokemon = useAppSelector(selectPokemon)
  const image = useAppSelector((state) => state.pokemon.image)
  if (!pokemon) {
    return <View style={base.centered}><Text>No Pokemon selected</Text></View>
  }

  return (
      <View style={{flex:1, flexDirection: 'column', flexWrap:'wrap', backgroundColor:'white'}}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height:'50%',
          width:'100%',
          position:'absolute',
          zIndex:1
        }}>
          <SvgUri
                width={230}
                height={230}
                uri={image}
            />
        </View>
        <View style={{ flex:1, flexBasis:'40%', flexGrow:0, flexShrink:0, flexDirection:'row'}}>
          <LinearGradient
            colors={PokemonTypesColors[pokemon.types[0].type.name.toUpperCase()]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1}}
            >  
              <View style={{ flex:1, alignItems: 'center'}}>
                <Text style={{color:'white', fontSize:28, fontWeight:'bold'}}>{ pokemon.name }</Text>
              </View>
          </LinearGradient>
        </View>
        <View style={{ flex:1, backgroundColor:'white', marginTop:30, zIndex:2}}>
  
        </View>
      </View>
  );
};
export default PokemonDetailScreen;