import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import AddToFavourites from "./AddToFavourites";
import { useNavigate } from "react-router-dom";
import {Movie} from "src/state/types";
import { addToFavourites } from "src/state/slice";
import { useDispatch } from "react-redux";
import './MovieList.scss';

const isNotInTheList = (movie: Movie, searchValue: string): boolean => {
    console.log(searchValue);
    if (searchValue === "") {
        return false;
    }
    const doesNotContainName = !movie.name.toLowerCase().includes(searchValue.toLowerCase());
    const doesNotContainDescription = !movie.description.toLowerCase().includes(searchValue.toLowerCase());
    const doesNotContainGenre = !movie.genres.find(genre => genre.toLowerCase().includes(searchValue.toLowerCase()));
    return doesNotContainName && doesNotContainDescription && doesNotContainGenre;
}

interface Props {
    readonly movies: Movie[];
    readonly searchValue: string;
    readonly handleFavouritesClick: (payload: Movie) => void;
}

const MovieList: React.FC<Props> = (props) => {

    const {movies, searchValue, handleFavouritesClick} = props;

    const [filteredMovies, setFilteredMovies] = React.useState(movies);

    React.useEffect(() => {
        if (movies && searchValue !== undefined) {
            setFilteredMovies(movies.filter(movie => !isNotInTheList(movie, searchValue)))
        }
    }, [movies, searchValue])
    
    if (!movies) {
        return null;
    }

    const RenderMovies =
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
            })

    return (
        <>
            {
                RenderMovies
            }
        </>
    );
};

export default MovieList;