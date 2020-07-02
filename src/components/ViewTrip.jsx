import React from 'react'

class ViewTrip extends React.Component {
  //set initial state but do I need to receive prop from trips ?? 
  
  state = { trips: [] }

  render() {
    return (
      <>
      <p>This is where each trip goes</p>
      </>
    )
  } 
}

export default ViewTrip;


/*


class Trips extends React.Component {


  getTrips = async () => {
    const response = await fetch("http://localhost:3000/trips", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const trips = await response.json()
    this.setState({ trips: trips})
  } 

  deleteTrip = async (id) => {
    await fetch(`http://localhost:3000/trips/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
    this.getTrips()
  }

  renderTrips = () => {
    return this.state.trips.map((trip, index) => {
      return (
        <div className="trip-container" key={index}>
          <h3>{trip.country}</h3>
          <p><strong>Activities: </strong> {trip.activities}</p>
          <p><strong>Highlights: </strong> {trip.highlights}</p>
          <p><strong>Year: </strong> {trip.year}</p>
          <img className="pic" src={trip.photo} alt=""/>
          <p className="timeAdded">Added: {moment(trip.created_at).startOf('minute').fromNow()}</p>
          <div className="show-edit-delete-container">
            <Link to={`/trips/${trip.id}`}>See Trip Photo</Link>
            <Link to={`/trips/${trip.id}/edit`}>Edit Trip</Link>
            <span onClick={() => this.deleteTrip(trip.id)}>Remove Trip</span>
          </div>
          <hr />
        </div>
      )
    })
  }

  async componentDidMount() {
    this.getTrips()
  }

  render() {
    return (
      <div>
        {this.renderTrips()}
      </div>
    )
  }
}

export default Trips;

  */