import React from "react";

const MovieDetails = (props) => {

    var content = null;
    const {movie} = props;

    content  = (
        <div>
        <img src={movie.Poster} alt='movie' ></img>
        <span>{movie.Title}</span>
        <span>{movie.Year}</span>
        <span>{movie.Metascore}</span>
        </div>
    )

    if (!movie) {
        return null;
    }

return (
    <div>
               {content}
    </div>
);


};


export default MovieDetails; 