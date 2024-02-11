import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface BottomTabState {
  value: number
}

// Define the initial state using that type
const initialState: BottomTabState = {
  value: 0,
}

export const bottomTabSlice = createSlice({
  name: 'bottom',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIndex: (state, action : PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

export const { setIndex } = bottomTabSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBottomTab = (state: RootState) => state.bottom.value

export default bottomTabSlice.reducer