import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import AddToFavourites from "./AddToFavourites";
import { useNavigate } from "react-router-dom";
import {Movie} from "src/state/types";
import { addToFavourites } from "src/state/slice";
import { useDispatch } from "react-redux";
import './MovieList.scss';

const filterMovie = (movie: Movie, searchValue: string): boolean => {
    if (searchValue === "") {
        return false;
    }
    if (movie.name.includes(searchValue)) {
        return true;
    }
    if (movie.description.includes(searchValue)) {
        return true;
    }
    if (movie.genres.find(genre => genre.includes(searchValue))) {
        return true;
    }
    return false;
}

interface Props {
    readonly movies: Movie[];
    readonly searchValue: string;
    readonly handleFavouritesClick: (payload: Movie) => void;
}

const MovieList: React.FC<Props> = (props) => {

    const {movies, searchValue, handleFavouritesClick} = props;

    let navigate = useNavigate();

    const [filteredMovies, setFilteredMovies] = React.useState(movies);

    React.useEffect(() => {
        if (movies && searchValue !== undefined) {
            setFilteredMovies(movies.filter(movie => !filterMovie(movie, searchValue)))
        }
    }, [movies, searchValue])
    
    const routeChange = (route) => {
        navigate(route);
    }

    if (!movies) {
        return null;
    }


    var RenderMovies = null
    if (props.movies.map) {
        RenderMovies =
            filteredMovies.map((movie, index) => {
            
                return movie ?
                    (<div key={movie.key} className="image-container d-flex justify-content-start m-3">
                        <Link to={`/movies/${movie.id}`}>
                        <img src={`/img/${movie.img}`} alt={movie.name}></img>
                        </Link>
                        <div
                            onClick={() => handleFavouritesClick(movie)}
                            className="overlay d-flex align-items-center justify-content-center">

                            <AddToFavourites />
                        </div>
                    </div>) : null
            }
            )
    }

    return (
        <>
            {
                RenderMovies
            }
        </>
    );
};

export default MovieList;