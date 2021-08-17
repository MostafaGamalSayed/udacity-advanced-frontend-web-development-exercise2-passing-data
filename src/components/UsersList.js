import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    
    const { whoFavorites } = this.props;
    const hasFavorites = whoFavorites.length !== 0;  
    
    if (!hasFavorites) {
      return 'None of the current users liked this movie';
    }
    
    return (
      <div>
        <p>Liked By:</p>
        <ul>
      		{whoFavorites.map(user => (
        		<li key={user.id}>{user.name}</li>
      		))}
        </ul>     
      </div>
    );
   	
  }
}

export default UsersList;