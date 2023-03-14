import React from "react";
import MovieList from "src/components/MovieList";
import MovieListHeading from "src/components/MovieListHeading";
import { removeFromFavourites } from "src/state/slice";
import { Movie } from "src/state/types";
import { RootState } from "src/state/store";
import { getFavourites } from "src/state/selectors";
import { connect } from "react-redux";
import AddToFavourites from "src/components/AddToFavourites";

interface StateProps {
    readonly favourites: Movie[];
}

interface ActionProps {
    readonly removeFromFavourites: (payload) => void;
}

class FavouritesComp extends React.Component<StateProps & ActionProps> {

    render() {
        const { favourites, removeFromFavourites } = this.props;
        return (<div className="container">

            <div className="row">
            <MovieListHeading heading='Favourites' />
            </div>
            <div className="row align-items-left">
                <MovieList movies={favourites} searchValue="" handleFavouritesClick={removeFromFavourites}>
                    <AddToFavourites title={"Remove from Favourites"} />
                </MovieList>
            </div>
        </div>
        )
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