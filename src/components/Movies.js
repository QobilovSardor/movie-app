import React from 'react';
import Movie from './Movie';
import NoteFound from './NoteFound';

function Movies(props) {
  const { movies = [] } = props
  return (
    <div className='container'>
      <div className='movies'>
        {movies.length ? movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
        )) : <NoteFound />}
      </div>
      {/* {movies.length ? movies.map(movie => (
        <div className='movies'>
          <Movie key={movie.imdbID} {...movie} />
        </div>
      )) : <NoteFound />} */}
    </div>
  );
};

export default Movies;