import React, { Component } from 'react';
import UsersList from './UsersList';

class MovieFavoritesCard extends Component {
  render() {
    
    const { movie, favorites } = this.props;
    
    return (
      <div>
          <h2>{movie.name}</h2>
          <UsersList
          	whoFavorites={favorites}     	
      	  />
      </div>
    )
  }
}

export default MovieFavoritesCard;