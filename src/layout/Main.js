import React from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c090e3d6&s=avengers')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = (str, type='all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=c090e3d6&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    return (
      <div className='main-content container'>
        <Search searchMovie={this.searchMovies} />
        {this.state.loading ? <Loader /> : (<Movies movies={this.state.movies} />)}
      </div>
    );
  }
}

export default Main;
