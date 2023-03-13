import React from "react";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import RemoveFavourites from "src/components/RemoveFavourites";
import {removeFromFavourites} from "src/state/slice";
import {Movie} from "src/state/types";
import {RootState} from "src/state/store";
import { getFavourites } from "src/state/selectors";
import { connect } from "react-redux";

interface StateProps {
    readonly favourites: Movie[];
}

interface ActionProps {
    readonly removeFromFavourites: (payload) => void;
}

class FavouritesComp extends React.Component<StateProps & ActionProps> {

    render() {
        const {favourites, removeFromFavourites} = this.props;
        return ( <><div className="row d-flex align-items-center mt-4 mb-4"></div>
        <div className="row">
            <MovieListHeading heading='Favourites' />
            <MovieList movies={favourites} searchValue="" handleFavouritesClick={removeFromFavourites}/>
        </div></>)
    }
}

const mapStateToProps = (state: RootState): StateProps => {
    return {
        favourites: getFavourites(state)
    }
}

const mapDispatchToProps: ActionProps = {
    removeFromFavourites
}

const Favourites = connect(mapStateToProps, mapDispatchToProps)(FavouritesComp);

export default Favourites;