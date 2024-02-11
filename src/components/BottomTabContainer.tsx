import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/Menu/HomeScreen';
import base from '../config/base';
import { View } from 'react-native';
import PokemonDetailScreen from '../screens/Pokemons/PokemonDetailScreen';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIndex } from '../store/counter/bottomTabSlice';

const FavoritesRoute = () => <View style={base.centered}><Text>Favorites</Text></View>;

const DetailsRoute = () => <View style={base.centered}><Text>Details</Text></View>;

//const PokemonDetailsRoute = (props : DrawerScreenProps<RootStackParamList>) => <PokemonDetailScreen {...props} />

const BottomTabContainer = () => {
  const index = useAppSelector((state) => state.bottom.value);
  const dispatch = useAppDispatch();

  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'favorites', title: 'Favorites', focusedIcon: 'star', unfocusedIcon: 'star-outline' },
    { key: 'details', title: 'Details', focusedIcon: 'text-box', unfocusedIcon: 'text-box-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen as React.FunctionComponent,
    favorites: FavoritesRoute,
    details: PokemonDetailScreen as React.FunctionComponent
  });

  function indexChange(value:number){
    dispatch(setIndex(value))
  }

  return (
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={indexChange}
        renderScene={renderScene}
        barStyle={{
            backgroundColor: 'white',
            position: 'absolute',
            overflow: 'hidden',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginBottom:20,
            height:80
        }}
        style={{borderColor: 'black'}}
        labeled={false}
    />
  );
};

export default BottomTabContainer;