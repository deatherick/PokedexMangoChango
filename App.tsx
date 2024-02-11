/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import { useAppSelector, useAppDispatch } from './src/store/hooks';
import { decrement, increment } from './src/store/counter/counterSlice';
import MenuContent from './src/components/MenuContent';
import BootSplash from "react-native-bootsplash";
import { IHomeScreenProps } from './src/screens/Menu/HomeScreen';
import { IPokemonsListScreenProps } from './src/screens/Pokemons/PokemonsListScreen';
import { IAbilitiesListScreenProps } from './src/screens/Abilities/AbilitiesListScreen';
import { IMovesListScreenProps } from './src/screens/Moves/MovesListScreen';
import { IItemsListScreenProps } from './src/screens/Items/ItemsListScreen';
import BottomTabContainer from './src/components/BottomTabContainer';
import PokemonDetailScreen, { IPokemonDetailScreenProps } from './src/screens/Pokemons/PokemonDetailScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export type RootStackParamList = {
  'Home': IHomeScreenProps
  'Pokemons': IPokemonsListScreenProps
  'Abilities': IAbilitiesListScreenProps
  'Moves': IMovesListScreenProps
  'Items': IItemsListScreenProps
  'Bottom': React.FunctionComponent
  'PokemonDetailScreen': IPokemonDetailScreenProps
};

const Drawer = createDrawerNavigator<RootStackParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, 
        headerTintColor: "white",
        headerTitleAlign:"left",
        headerTitle:"Your Pokédex",
        headerStyle: {
          backgroundColor: '#78a7c2',
        }}}
      initialRouteName='Bottom'
      drawerContent={(props) => <MenuContent {...props} /> }
   >
    <Drawer.Screen name="Bottom" options={{title:"Home"}} component={BottomTabContainer} />
    <Drawer.Screen name="PokemonDetailScreen" component={PokemonDetailScreen} />
  </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <MyDrawer/>
        </NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
    </SafeAreaProvider>
  );
}

function OldApp(): React.JSX.Element {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Redux Counter">
              <View style={styles.fixToText}>
                <Pressable
                  style={styles.button}
                  onPress={() => dispatch(decrement())}>
                  <Text style={styles.text}>-</Text>
                </Pressable>
                <Text style={styles.counter}>{count}</Text>
                <Pressable
                  style={styles.button}
                  onPress={() => dispatch(increment())}>
                  <Text style={styles.text}>+</Text>
                </Pressable>
              </View>
            </Section>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    height: 60,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  counter: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 75,
    marginRight: 75
  },
});

export default App;
