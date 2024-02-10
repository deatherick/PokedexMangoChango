import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type IPokemonCardProps = PropsWithChildren<{
    number: string
    name: string
    type: string
}>;

interface PokemonTypesColors {
    type: string
}

function PokemonCard({children, number, name, type}: IPokemonCardProps): React.JSX.Element {
    const onPress = () => {};
    return (  
        <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <LinearGradient
                key={'Card'}
                colors={pokemonTypesColors[type.toUpperCase()]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{flex: 1, borderRadius: 10, padding:20}}
            >    
                <Text>{number}</Text>
                <Text>{name}</Text>
                <View>
                    <Text>Grass</Text>
                    <Text>Poison</Text>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: -30,
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