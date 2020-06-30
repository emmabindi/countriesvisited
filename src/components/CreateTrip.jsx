import React from 'react';

class CreateTrip extends React.Component {

  // creating controlled state I think 
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
    console.log(this.props) // no props are showing!!! 
  }

  onFormSubmit = async (event) => {
    event.preventDefault()
    const body = {
      trip: this.state
    }
    // console.log(this.state)
    await fetch("http://localhost:3000/trips/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    // this is to redirect back to trips using history prop
    this.props.history.push("/trips")
  }

  render() {
    // console.log(this.state)

    return(
      <div className="container">
        <h3>Add a Trip to your List!</h3>
        <form onSubmit={this.onFormSubmit} >
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" onChange={this.onInputChange} />
          <label htmlFor="activities">Activities</label>
          <input type="text" name="activities" id="activities" onChange={this.onInputChange} />
          <label htmlFor="highlights">Highlights</label>
          <input type="text" name="highlights" id="highlights" onChange={this.onInputChange} />
          <label htmlFor="year">Year Visited</label>
          <input type="text" name="year" id="year" onChange={this.onInputChange} />
          <label htmlFor="photo">Paste Url Link to Photo:</label>
          <input type="text" name="photo" id="photo" onChange={this.onInputChange} />
          <input type="submit" value="Add Trip" />
        </form>
      </div>
    )
  }
}

export default CreateTrip;
