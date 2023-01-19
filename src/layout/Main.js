import React from 'react';
import Movies from '../components/Movies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c090e3d6&s=panda')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    return (
      <div className='main-content'>
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <h3>Loading...</h3>}
        
      </div>
    );
  }
}

export default Main;
