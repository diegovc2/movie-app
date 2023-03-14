import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovie, getMovies } from "src/state/selectors";
const MovieDetails = () => {

    const { id } = useParams();

    var content = null;

    const movie = useSelector((state) => getMovie(state, id));

    if (!movie) {
        return null;
    }

    content = (
        <div className="container ">
            <div className="row align-items-start">
                <div className="col-md-2 col-sm">
                    <img src={`/img/${movie.img}`} alt={movie.name} ></img>
                </div>
                <div className="col-md-5 col-sm">
                    <div className="row">
                        <span>{movie.name}</span>

                        <span>{movie.length}</span>

                        <hr className="solid" />
                        <span>{movie.rate}</span>
                        <span>{movie.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {content}
        </div>
    );


};


export default MovieDetails; 