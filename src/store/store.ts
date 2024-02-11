import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokemonReducer from './counter/pokemonSlice'
import bottomTabReducer from './counter/bottomTabSlice'
import pokemonListReducer from './counter/pokemonListSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    bottom: bottomTabReducer,
    pokemonList: pokemonListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch