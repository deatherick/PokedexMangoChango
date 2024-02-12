import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IPokemon } from '../../services/pokemon'

// Define a type for the slice state
interface PokemonState {
  value: IPokemon | null
  image: string
}

// Define the initial state using that type
const initialState: PokemonState = {
  value: null,
  image: ''
}

const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{id}.svg`

export const pokemonSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<IPokemon>) => {
      state.value = action.payload;
      state.image = POKEMON_IMAGE_URL.replace('{id}', action.payload.id.toString());
    }
  },
})

export const { setPokemon } = pokemonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPokemon = (state: RootState) => state.pokemon.value

export default pokemonSlice.reducer