import React from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c090e3d6&s=avengers')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=c090e3d6&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    return (
      <div className='main-content container'>
        <Search searchMovie={this.searchMovies} />
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <Loader />}
      </div>
    );
  }
}

export default Main;
