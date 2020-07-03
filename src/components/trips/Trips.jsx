import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import SearchTrips from './SearchTrips';

class Trips extends React.Component {
  // set initial state:
  // state = { trips: [] } or alternative can use constructor:
  constructor(props) {
    super(props)
    this.state = { trips: [] };
  }

  getTrips = async () => {
    const response = await fetch("http://localhost:3000/trips", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const trips = await response.json();
    this.setState({ trips: trips});
  } 

  deleteTrip = async (id) => {
    await fetch(`http://localhost:3000/trips/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    window.alert("Trip Deleted")
    this.getTrips()
  }

  renderTripCount = () => {
    return (
      <h1 className="tripCount">{this.state.trips.length} trips & counting!</h1>
      )
    // ((trip, index) => {
    //   return (
    //     <h1>Test</h1>
    //   )
    // })
  }

  renderTrips = () => {
    return this.state.trips.map((trip, index) => {
      return (
        <div className="trip-container" key={index}>
          <h2>{trip.country} <span className="timeAdded"> Added: {moment(trip.created_at).startOf('minute').fromNow()}</span></h2>
          <p><strong>Activities: </strong> {trip.activities}</p>
          {/* <p><strong>Highlights: </strong> {trip.highlights}</p> */}
          <p><strong>Year: </strong> {trip.year}</p>
          {/* <img className="pic" src={trip.photo} alt=""/> */}
          <div className="show-edit-delete-container">
            <Link to={{
              pathname: `/trips/${trip.id}`,
              state: trip,}}>See Trip Photo</Link>
            <Link to={`/trips/${trip.id}/edit`}>Edit Trip</Link>
            <span onClick={() => this.deleteTrip(trip.id)}>Remove Trip</span>
          </div>
          <hr/>
        </div>);
    });
  };

  async componentDidMount() {
    this.getTrips()
  }

  render() {
    const { tripCount } = this.state
    // 
    return (
      <>
      <div>{this.renderTripCount()}</div>
      {/* <SearchTrips/> */}
      <label htmlFor>Search keyword: <input type="text"/></label>
      <div>{this.renderTrips()}</div> 
      </>
    )
  }
}

export default Trips;
