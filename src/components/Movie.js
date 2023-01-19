import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div>
      <div key={imdbID} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Poster} />
        </div>
        <div className="card-content">
          <span className='card-title activator'>{Title}</span>
          <hr />
          <b>{Year}<i className="material-icons right">{Type}</i></b>
        </div>
      </div>
    </div>
  );
}

export default Movie;