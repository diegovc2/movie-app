import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Routes } from 'react-router';
import Movies from './pages/Movies';
import Favourites from './pages/Favourites';

{/*TODO: CONNECT WITH THE TEXT of movie.mock.json
            IMPLEMENT REDUX
            MOVIE DETAIL
            BACK AND FORWARD ROUTING
            SASS
            MAKE A FUNCTIONAL COMPONENT WITH HOOKS
              */}


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }

    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        ) || [];

        setFavourites(movieFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };



    return (
        <div className='container-fluid movie-app'>
            <Routes>
                <Route path={"/movies"} element={<Movies movies={movies} searchValue={searchValue} setSearchValue={setSearchValue} addFavouriteMovie={addFavouriteMovie}/>}/>
                <Route path={"/movies/favourites"} element={<Favourites favourites={movies} removeFavouriteMovie={removeFavouriteMovie}/>}/>
                <Route path="/" element={<Movies movies={movies} searchValue={searchValue} setSearchValue={setSearchValue} addFavouriteMovie={addFavouriteMovie}/>}/>
            </Routes>

        </div>
    );
};

export default App;
