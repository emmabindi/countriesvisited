import React from 'react'
import { Link } from 'react-router-dom';
 
class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trips">Trip List</Link>
        <Link to="/trips/create">Add a Trip</Link>
        <Link to="/countries">Countries List</Link>
      </nav>
    )
  }
}

export default NavBar;