import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { useAppDispatch } from '../store/hooks';
import { setPokemon } from '../store/counter/pokemonSlice';
import { setIndex } from '../store/counter/bottomTabSlice';
import { IPokemon } from '../services/pokemon';

type IPokemonCardProps = PropsWithChildren<{
    pokemon: IPokemon
}>;

const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{id}.svg`

function PokemonCard({children, pokemon}: IPokemonCardProps): React.JSX.Element {
    const dispatch = useAppDispatch()

    const image = POKEMON_IMAGE_URL.replace('{id}', pokemon.id.toString());

    const onPress = () => {
        dispatch(setPokemon({
            name: pokemon.name,
            image: image,
            type: pokemon.types[0].type.name
        }))
        dispatch(setIndex(2))
    };

    return (  
        <TouchableOpacity style={[styles.button]} onPress={onPress}>
            <LinearGradient
                key={'Card'}
                colors={PokemonTypesColors[pokemon.types[0].type.name.toUpperCase()]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{flex: 1, borderRadius: 10, padding:15}}
            >    
                <View style={{flexDirection: 'row', flexWrap:'wrap', height:80}}>
                    <View style={{ flex:2}}>
                        <View style={{flex:1}}>
                            <Text style={styles.titleText}>#{('000'+pokemon.id).slice(-3)}</Text>
                            <Text style={styles.titleText}>{pokemon.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
                            {pokemon.types.map(type => (
                                <View style={styles.element} key={type.type.name}>
                                    <Text style={styles.text}>{type.type.name}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{ flex:1}}>
                        <View style={{flex:1}}>
                            <SvgUri
                                width={80}
                                height={80}
                                uri={image}
                            />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export const PokemonTypesColors: { [key: string]: Array<string> } = {
    BUG: ['#038206', '#159519', '#28A62C'],
    DARK: ['#44404E', '#50495C', '#5A5365'],
    DRAGON: ['#148B76', '#269D88', '#39AE99'],
    ELECTRIC: ['#f78f14', '#f8aa45', '#fdd489'],
    FAIRY : ['#f75190', '#fa9289', '#fbd49e'],
    FIGHTING: ['#B91718', '#CF2D2D', '#DB3C3D'],
    FIRE: ['#C05820', '#D36A31', '#E37C45'],
    FLYING: ['#20B9B3', '#32CBC6', '#45DBD5'],
    GHOST: ['#9B44B8', '#AE57CB', '#BE69DA'],
    GRASS : ['#13c1ad', '#5dd1b3', '#aee6b9'],
    GROUND: ['#754E13', '#876125', '#987339'],
    ICE: ['#82D3EC', '#B5F0FD', '#E4F4FC'],
    NORMAL: ['#B0B0B0', '#C3C3C3', '#D3D3D3'],
    POISON: ['#7617B8', '#892ACB', '#9A3CDA'],
    PSYCHIC: ['#C67EC7', '#DA91DB', '#E9A2EA'],
    ROCK: ['#707070', '#828282', '#949494'],
    STEEL: ['#4E4E4F', '#616161', '#737373'],
    WATER : ['#2fcaf8', '#80d0db', '#e1decc']
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
    },
    element: {
        //flex:1, 
        borderColor:'white', 
        borderStyle:'solid', 
        borderWidth:2, 
        width:80, 
        alignItems:'center',
        backgroundColor: '#f58228',
        borderRadius: 15,
        marginEnd:10,
        height:25,
        paddingTop: 2   
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
    },
    titleText: {
        color: 'white',
        fontSize: 16,
        padding:3
    }
});

export default PokemonCard;