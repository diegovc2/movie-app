import { createSelector } from "@reduxjs/toolkit";
import {RootState} from "./store";
import {Movie} from "./types";

const getState = (state: RootState) => {
    return state.movies
};

export const getMovies = createSelector(getState, (state): Movie[] => state.movies);

export const getFavourites = createSelector(getState, (state): Movie[] => state.favourites);

export const getMovie = createSelector(getMovies, (state, id) => id, (movies, id): Movie => {
    if (!movies) {
        return null;
    }
    return movies.find(movie => String(movie.id) === id);
})