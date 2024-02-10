import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackParamList } from '../../../App';
import { DrawerScreenProps } from '@react-navigation/drawer';
import PokemonsListScreen from '../Pokemons/PokemonsListScreen';
import AbilitiesListScreen from '../Abilities/AbilitiesListScreen';
import MovesListScreen from '../Moves/MovesListScreen';
import ItemsListScreen from '../Items/ItemsListScreen';

export interface IHomeScreenProps {}

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

type Props = DrawerScreenProps<RootStackParamList>;

const HomeScreen: React.FunctionComponent<Props> = ({route, navigation}) => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Pokemons' component={PokemonsListScreen} /> 
        <Tab.Screen name='Abilities' component={AbilitiesListScreen} /> 
        <Tab.Screen name='Moves' component={MovesListScreen} /> 
        <Tab.Screen name='Items' component={ItemsListScreen} /> 
    </Tab.Navigator>
  );
};
export default HomeScreen;