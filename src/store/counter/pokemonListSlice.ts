import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IPokemon, getPokemonDataFromAPI } from '../../services/pokemon'

// Define a type for the slice state
interface PokemonListState {
  value: Array<IPokemon>
  status: string
  offset: number
}

// Define the initial state using that type
const initialState: PokemonListState = {
  value: [],
  status: 'idle',
  offset: 0
}

export const getPokemonData = createAsyncThunk('pokemonList/getPokemons',
async (data: {length: number, offset: number}) => {
    const {length, offset} = data;
    console.log('data', data);
    return getPokemonDataFromAPI(length, offset);
},)

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Array<IPokemon>>) => {
      state.value = action.payload.map(pokemon => {
        pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        console.log(pokemon);
        return pokemon
      })
    },
    pushPokemonList: (state, action: PayloadAction<IPokemon>) => {
      state.value.push(action.payload)
    },
    clearState: (state) => {
      state.status = 'idle'
      state.value = []
      state.offset = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonData.pending, (state) => {
        state.status = 'loading'
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.status = 'succeded'
      state.value = state.value.concat(action.payload?.res as Array<IPokemon>).map(pokemon => {
        pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        return pokemon
      })
      state.offset = action.payload?.offset + 10
    });
    }
})

export const { setPokemonList, pushPokemonList, clearState } = pokemonListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPokemonList = (state: RootState) => state.pokemonList.value

export default pokemonListSlice.reducer