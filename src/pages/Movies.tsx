import React from "react";
import AddFavourites from "src/components/AddToFavourites";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import SearchBox from "src/components/SearchBox";

interface Props {
    readonly movies: any[];
    readonly searchValue: string;
    readonly setSearchValue: any;
    readonly addFavouriteMovie: any;
}

class Movies extends React.Component<Props> {
    render() {

        const {movies, searchValue, setSearchValue, addFavouriteMovie} = this.props;
        return (<>
        <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading movies={movies} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className="row">
        <MovieList movies={movies}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={addFavouriteMovie}
        />
    </div> 
        </>)
        
    }
}

export default Movies;