import React from 'react';

class Search extends React.Component {
  state = {
    search: 'avengers',
    type: 'all'
  }

  searchHendler = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type)
    }
  }

  hendlerChecked = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.searchMovie(this.state.search, this.state.type)
    })
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
          <button className='btn btn-succsess' onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input className="with-gap"
              name="type"
              type="radio"
              data-type='all'
              onChange={this.hendlerChecked}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input className="with-gap"
              name="type"
              type="radio"
              data-type='movie'
              onChange={this.hendlerChecked}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input className="with-gap"
              name="type"
              type="radio"
              data-type='series'
              onChange={this.hendlerChecked}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}


export default Search;
