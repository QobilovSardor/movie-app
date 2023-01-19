import React from 'react';

class Search extends React.Component {
  state = {
    search: ''
  }

  searchHendler = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <input 
            type="search"
            name='search'
            className="active"
            placeholder='Search movies'
            value={this.state.search}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
            onKeyDown={this.searchHendler}
          />
          <button className='btn btn-succsess' onClick={() => this.props.searchMovie(this.state.search)}>
            Search Movies
          </button>
        </div>
      </div>
    );
  }
}


export default Search;
