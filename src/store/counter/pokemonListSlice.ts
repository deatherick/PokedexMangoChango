import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IPokemon } from '../../services/pokemon'

// Define a type for the slice state
interface PokemonListState {
  value: Array<IPokemon>
}

// Define the initial state using that type
const initialState: PokemonListState = {
  value: [],
}

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Array<IPokemon>>) => {
      state.value = action.payload
    },
    pushPokemonList: (state, action: PayloadAction<IPokemon>) => {
      state.value.push(action.payload)
    },
    clearState: (state) => {
      state.value = []
    }
  },
})

export const { setPokemonList, pushPokemonList, clearState } = pokemonListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPokemonList = (state: RootState) => state.pokemonList.value

export default pokemonListSlice.reducer