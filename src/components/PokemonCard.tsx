import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';

type IPokemonCardProps = PropsWithChildren<{
    number: number
    name: string
    type: string
}>;

interface PokemonTypesColors {
    type: string
}

const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{id}.svg`

function PokemonCard({children, number, name, type}: IPokemonCardProps): React.JSX.Element {
    const onPress = () => {};
    return (  
        <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <LinearGradient
                key={'Card'}
                colors={pokemonTypesColors[type.toUpperCase()]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{flex: 1, borderRadius: 10, padding:15}}
            >    
                <View style={{flexDirection: 'row', flexWrap:'wrap', height:80}}>
                    <View style={{ flex:2}}>
                        <View style={{flex:1}}>
                            <Text>#{('000'+number).slice(-3)}</Text>
                            <Text>{name}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>Grass</Text>
                            <Text>Poison</Text>
                        </View>
                    </View>
                    <View style={{ flex:1}}>
                        <View style={{flex:1}}>
                            <SvgUri
                                width={80}
                                height={80}
                                uri={POKEMON_IMAGE_URL.replace('{id}', number.toString())}
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const pokemonTypesColors: { [key: string]: Array<string> } = {
    GRASS : ['#13c1ad', '#5dd1b3', '#aee6b9'],
    WATER : ['#2fcaf8', '#80d0db', '#e1decc'],
    FAIRY : ['#f75190', '#fa9289', '#fbd49e'],
    ELECTRIC: ['#f78f14', '#f8aa45', '#fdd489'],
    FIRE: ['#f13f2e', '#f8aa45', '#fdd489'],
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    button: {
        backgroundColor: '#DDDDDD',
        height:110,
        marginHorizontal: 10,
        marginVertical:5,
        borderRadius:10
    }
});

export default PokemonCard;