import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/Menu/HomeScreen';
import base from '../config/base';
import { View } from 'react-native';

const FavoritesRoute = () => <View style={base.centered}><Text>Favorites</Text></View>;

const DetailsRoute = () => <View style={base.centered}><Text>Details</Text></View>;

const BottomTabContainer = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'favorites', title: 'Favorites', focusedIcon: 'star', unfocusedIcon: 'star-outline' },
    { key: 'details', title: 'Details', focusedIcon: 'book-open-variant', unfocusedIcon: 'book' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen as React.FunctionComponent,
    favorites: FavoritesRoute,
    details: DetailsRoute,
  });

  return (
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
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