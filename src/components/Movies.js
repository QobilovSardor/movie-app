import React from 'react';
import Movie from "./Movie";

function Movies(props) {
  const {movies} = props
  return (
    <div>
      <h1>Movies</h1>
      <div className="movies">
        {movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;