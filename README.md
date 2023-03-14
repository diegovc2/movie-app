# Betsson Movie Project

This project was made by Diego Veloso

## Installation

use `cd` to arrive to the project directory in your cmd

In the project directory, install:

### `npm install`

Then you need to run it with 

### `npm start`

## Usage
The app consists of 3 Routes <br/>
  1. Movies: The default landing page where the list of movies, the search bar and the favourites indicator are shown. By hovering on a movie, the Add to Favourites           button is shown and you can add it to the Favourites List
  2. MovieDetails: Contains information about the selected movie, including name, actors, duration, etc...
  3. Favourites: Catalog of favourited movies. Here you can remove the favourited movies by clicking on the Remove from Favourites button that appears when you hover on       an image.
On the Movie List, if you click on one Movie it will send you to the Details. <br/>
If you input words on search, it will filter the movies according to the word written.<br/>
If you click the button Add to Favourites, it will add it to the Favorite List wich is saved into localStorage. Then you can access later using the Favourites button  <br/> 

