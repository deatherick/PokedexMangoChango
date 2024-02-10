import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';
import LinearGradient from 'react-native-linear-gradient';

export interface IPokemonDetailScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const PokemonDetailScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    start={{x: 0, y: 0}}
    end={{x: 0, y: 1}}
    style={{flex: 1}}
    //locations={[0.5,0.5,0.5]}
    >    
      <View style={base.centered}>
        <Text>Squirtle</Text>
      </View>
    </LinearGradient>
  );
};
export default PokemonDetailScreen;