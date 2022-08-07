import React from 'react';
import MovieCard from './MovieCard';

import {useState} from 'react'
function MovieList({movielist,addmovie}) {
  
    return (
        <div>
            {movielist.map((movie,key)=>{return (
                <MovieCard movie={movie}addmovie={addmovie}></MovieCard>
               );})}
        </div>
    );
}

export default MovieList;