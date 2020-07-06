import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import SearchTrips from './SearchTrips';

class Trips extends React.Component {
  // set initial state:
  // state = { trips: [] } or alternative can use constructor:
  constructor(props) {
    super(props)
    this.state = { trips: [], search: null};
  }

  getTrips = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/trips`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const trips = await response.json();
    this.setState({ trips: trips});
  } 

  deleteTrip = async (id) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    window.alert("Trip Deleted")
    this.getTrips()
  }

  searchTrips = (event)=> {
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  renderTripCount = () => {
    if (this.state.trips.length == 1) {
      return (
        <h1 className="tripCount">{this.state.trips.length} trip & counting!</h1>
        )
    } else if (this.state.trips.length == 0) {
      return (
        <h1 className="tripCount">No trips just yet! Get packing</h1>      )
    } else {
      return (
        <h1 className="tripCount">{this.state.trips.length} trips & counting!</h1>
      )
    }
  }

  renderTrips = () => {
    if (this.state.search == null) {
      return this.state.trips.map((trip, index) => {
        return (
          <div className="trip-container" key={index}>
            <h2>{trip.country} <span className="timeAdded"> Added: {moment(trip.created_at).startOf('minute').fromNow()}</span></h2>
            <p><strong>Activities: </strong> {trip.activities}</p>
            <p><strong>Year: </strong> {trip.year}</p>
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
    } else if (this.state.trips.country.includes(this.state.search)) {
      return this.state.trips.map((trip, index) => {
        return (
          <div className="trip-container" key={index}>
            <h2>{trip.country} <span className="timeAdded"> Added: {moment(trip.created_at).startOf('minute').fromNow()}</span></h2>
            <p><strong>Activities: </strong> {trip.activities}</p>
            <p><strong>Year: </strong> {trip.year}</p>
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
    }
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
      <label>Search keyword: <input type="text" onChange={(e) => this.searchTrips(e)}/></label>
      <div>{this.renderTrips()}</div> 
      </>
    )
  }
}

export default Trips;
