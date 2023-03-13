import React from "react";
import { connect } from "react-redux";
import AddFavourites from "src/components/AddToFavourites";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import SearchBox from "src/components/SearchBox";
import { populateMovies, addToFavourites } from "src/state/slice";
import { RootState } from "src/state/store";
import { Movie } from "src/state/types";
import { getMovies, countFavourites } from "src/state/selectors";
import MoviesData from "./../content/movie.mock-data.json";

import "./Movies.scss";
import { Link } from "react-router-dom";

interface StateProps {
    readonly movies: Movie[];
    readonly favouritesCount: number;
}

interface ActionProps {
    populateMovies: (payload) => void;
    addToFavourites: (payload) => void;
}

class MoviesComp extends React.Component<StateProps & ActionProps, { searchValue: string }> {

    constructor(props) {
        super(props);
        this.state = { searchValue: "" }
    }

    componentDidMount() {
        this.props.populateMovies(MoviesData);
    }

    setSearchValue(newValue) {
        this.setState({ searchValue: newValue });
    }

    render() {

        const { movies } = this.props;

        if (!movies) {
            return null;
        }
        return (<>
            <div className='row d-flex align-items-center row-cols-1 row-cols-md-4'>
                <MovieListHeading heading={"Search"} />
                <SearchBox value={this.state.searchValue} setSearchValue={this.setSearchValue.bind(this)} />
              
                <Link to={"/favourites"} className="align-self-end">
                <button type="button" className="btn btn-outline-light">
                    <div className={"icon"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                    <div className={"circle"}>{this.props.favouritesCount}</div>
                    </div>
                
                    Favourites
                </button>
                </Link>
            </div>
            <div className="row">
                <MovieList movies={movies}
                    searchValue={this.state.searchValue}
                    handleFavouritesClick={this.props.addToFavourites}
                />
            </div>
        </>)

    }
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        movies: getMovies(state),
        favouritesCount: countFavourites(state)
    }

}

const mapDispatchToProps: ActionProps = {
    populateMovies,
    addToFavourites
}

const Movies = connect<StateProps, ActionProps>(mapStateToProps, mapDispatchToProps)(MoviesComp);

export default Movies;