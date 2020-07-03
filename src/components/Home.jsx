import React from 'react';

function Home() {
  return(
    <>
    <p>Hi {localStorage.getItem("username")}</p>
    <h1>Welcome to Em's Trips App</h1>
    <p>Display trip count</p>
    <p>Link to view trips list</p>
    </>
  )
}
export default Home;