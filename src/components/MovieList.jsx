import React from 'react';
import MovieCard from './MovieCard';

import {useState} from 'react'
function MovieList({movielist,addmovie}) {
  
    return (


        <BrowserRouter>

        <div>


            {movielist.map((movie,key)=>{return (
           <Route  path='/Desc'>  <MovieCard movie={movie}addmovie={addmovie}></MovieCard> </Route>
               );})}
        </div>
        </BrowserRouter>
    );
}

export default MovieList;