import React from "react";
import { useSelector } from "react-redux";
import {useParams} from "react-router";
import { getMovie, getMovies } from "src/state/selectors";
const MovieDetails = () => {

    const {id} = useParams();

    var content = null;

    const movie = useSelector((state) => getMovie(state, id));

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