import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trips">Trip List</Link>
        <Link to="/trips/create">Add a Trip</Link>
        {/* <Link to="/secrets">Secrets</Link> */}
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <span
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("username")
            history.push("/login");
          }}
        >
          Logout
        </span>
        {/* <Link to="/countries">Countries List</Link> */}
      </nav>
    );
  }

export default NavBar;
