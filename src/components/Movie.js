import React from 'react';

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div key={imdbID}>
      <div  className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Poster} />
        </div>
        <div className="card-content card-stacked">
          <b className="card-title activator grey-text text-darken-4">{Title}</b>
          <br /> 
          <hr />
          <br />
          <b>{Type} <span className='right'>{Year}</span></b>
        </div>
      </div>
    </div>
  );
};

export default Movie;