import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Routes } from 'react-router';
import Movies from './pages/Movies';
import Favourites from './pages/Favourites';
import MovieDetails from './components/MovieDetails';

{/*TODO: CONNECT WITH THE TEXT of movie.mock.json
            IMPLEMENT REDUX
            MOVIE DETAIL
            BACK AND FORWARD ROUTING
            SASS
            MAKE A FUNCTIONAL COMPONENT WITH HOOKS
              */}


const App = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className='container-fluid movie-app'>
            <Routes>
                <Route path={"/movies/:id"} element={<MovieDetails/>}/>
                <Route path={"/movies/favourites"} element={<Favourites/>}/>
                <Route path={"/movies"} element={<Movies/>}/>
                <Route path="/" element={<Movies/>}/>
            </Routes>

        </div>
    );
};

export default App;
