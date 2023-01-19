import React, {Component} from 'react';
import Movies from "../components/Movies";

class Main extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c090e3d6&s=panda')
      .then(respone => respone.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return (
      <div className="main-content container">
        {this.state.movies.length ? (<Movies movies={this.state.movies} />) : <h3>Loading..</h3>}
      </div>
    );
  }
}

export default Main;