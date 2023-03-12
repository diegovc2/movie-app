import React from "react";
import Popup from 'reactjs-popup';
import MovieDetails from "./MovieDetails";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    var RenderMovies = null
    if (props.movies.map) {
     RenderMovies = 
        props.movies.map((movie, index) => {
            
            return movie ? 
            (<div key={movie.name} className="image-container d-flex justify-content-start m-3">
                
                <Popup trigger={
                <img src={movie.Poster} alt='movie' ></img>
                }
                modal >
                <MovieDetails props = {movie}></MovieDetails>
                </Popup>
                <div
                    onClick={() => props.handleFavouritesClick(movie)}
                    className="overlay d-flex align-items-center justify-content-center">

                    <FavouriteComponent />
                </div>
            </div>) : null}
        )}

    return (
        <>
            { 
                RenderMovies
            }
        </>
    );
};

export default MovieList;