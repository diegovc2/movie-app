import React from "react";
const MovieDetails = (props) => {

    var content = null;
    const {movie} = props;

    if (!movie) {
        return null;
    }

    content  = (
        <div>
        <img src={`/img/${movie.img}`} alt={movie.name} ></img>
        <span>{movie.name}</span>
        <span>{movie.length}</span>
        <span>{movie.rate}</span>
        <span>{movie.description}</span>
        </div>
    )

return (
    <div>
               {content}
    </div>
);


};


export default MovieDetails; 