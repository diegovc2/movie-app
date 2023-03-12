import React from "react";
import { connect } from "react-redux";
import AddFavourites from "src/components/AddToFavourites";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import SearchBox from "src/components/SearchBox";
import { populateMovies, addToFavourites } from "src/state/slice";
import {RootState} from "src/state/store";
import {Movie} from "src/state/types";
import MoviesData from "./../content/movie.mock-data.json";


interface Props {
    readonly searchValue: string;
    readonly setSearchValue: any;
}

interface StateProps {
    readonly movies: Movie[];
}

interface ActionProps {
    populateMovies: (payload) => void;
    addToFavourites: (payload) => void;
}

class MoviesComp extends React.Component<Props & StateProps & ActionProps, {searchValue: string}> {

    constructor(props) {
        super(props);
        this.state = {searchValue: ""}
    }

    componentDidMount() {
        this.props.populateMovies(MoviesData);
    }

    setSearchValue(newValue) {
        this.setState({searchValue: newValue});
    }
    
    render() {

        const {movies} = this.props;

        if (!movies) {
            return null;
        }
        return (<>
        <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading={"Search"} />
        <SearchBox value={this.state.searchValue} setSearchValue={this.setSearchValue.bind(this)} />
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
        movies: state.movies.movies
    }
    
}

const mapDispatchToProps: ActionProps = {
    populateMovies,
    addToFavourites
}

const Movies = connect(mapStateToProps, mapDispatchToProps)(MoviesComp);

export default Movies;