import React from 'react'

class ViewTrip extends React.Component {  
  render() {
    console.log(this.props.location.state) // undefined as state hasn't been set
    const trip = this.props.location.state
    console.log(this.state)
      return(
      <>
        <img className="pic" src={trip.photo}/>
        <h3>{trip.country}</h3>
        <p><strong>Activities: </strong><br/>{trip.activities}</p>
        <p><strong>Highlights: </strong><br/>{trip.highlights}</p>
        <p><strong>Year: </strong> {trip.year}</p>
        <button onClick={this.props.history.goBack}>Back</button>
      </>
      )
  }
}

export default ViewTrip;
