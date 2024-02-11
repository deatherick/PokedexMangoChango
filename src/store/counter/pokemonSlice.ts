import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IPokemonDetailScreenProps } from '../../screens/Pokemons/PokemonDetailScreen'

// Define a type for the slice state
interface PokemonState {
  value: IPokemonDetailScreenProps | null
}

// Define the initial state using that type
const initialState: PokemonState = {
  value: null,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<IPokemonDetailScreenProps>) => {
      state.value = action.payload
    }
  },
})

export const { setPokemon } = pokemonSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPokemon = (state: RootState) => state.pokemon.value

export default pokemonSlice.reducer