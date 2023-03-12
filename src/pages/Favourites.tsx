import React from "react";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import RemoveFavourites from "src/components/RemoveFavourites";

interface Props {
    readonly favourites: any[];
    readonly removeFavouriteMovie: (movie: any) => void;
}

class Favourites extends React.Component<Props> {

    render() {
        const {favourites, removeFavouriteMovie} = this.props;
        return ( <><div className="row d-flex align-items-center mt-4 mb-4"></div>
        <div className="row">
            <MovieListHeading heading='Favourites' />
            <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites}></MovieList>
        </div></>)
    }
}

export default Favourites;