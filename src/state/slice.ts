import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from './types'
import movieData from "src/content/movie.mock-data.json";

export interface MoviesState {
  movies: Movie[] | undefined;
  favourites: Movie[];
}

const initialState: MoviesState = {
  movies: movieData,
  favourites: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    populateMovies: (state, action) => {
      state.movies = action.payload;
    },
    
    addToFavourites: (state, action) => {
      const movie = action.payload;
      if (!state.favourites.find(favourite => favourite.id === movie.id)) {
        state.favourites.push(movie);
      }
    },

    removeFromFavourites: (state, action) => {
      const movie = action.payload;
      state.favourites = state.favourites.filter(favourite => favourite.id === movie.id);
    }
  },
})

// Action creators are generated for each case reducer function
export const { populateMovies, addToFavourites, removeFromFavourites} = moviesSlice.actions

export default moviesSlice.reducer