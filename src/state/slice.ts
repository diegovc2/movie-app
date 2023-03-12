import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movies } from './types'

export interface MoviesState {
  movies: Movies | undefined;
}

const initialState: MoviesState = {
  movies: undefined,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    populateMovies: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { populateMovies} = moviesSlice.actions

export default moviesSlice.reducer