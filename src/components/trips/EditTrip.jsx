import React from 'react';

class EditTrip extends React.Component {
  state = { 
    country: "", 
    activities: "", 
    highlights: "", 
    year: "", 
    photo: "", 
    loading: true, 
    id: this.props.match.params.id }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }; 

  onFormSubmit = async (event) => {
    event.preventDefault()
    const { id, country, activities, highlights, year, photo} = this.state 
    await fetch(`http://localhost:3000/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify( { country, activities, highlights, year, photo }),
    });
    this.props.history.push('/trips');
  };
  
  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/trips/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const { country, activities, highlights, year, photo } = await response.json();
    this.setState({ country, activities, highlights, year, photo, loading: false})
  }

  render() {
    const { country, activities, highlights, year, photo, loading } = this.state
    console.log(this.state)

    return (
      !loading && (
        <div className="container">
          <h1>Edit a Trip</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={this.onInputChange}
              value={country}
            />
            <label htmlFor="activities">Activities</label>
            <textarea
              type="text"
              name="activities"
              id="activities"
              onChange={this.onInputChange}
              value={activities}
            />
            <label htmlFor="highlights">Trip Highlights</label>
            <textarea
              name="highlights"
              id="highlights"
              onChange={this.onInputChange}
              value={highlights}
            />
            <label htmlFor="year">Year of Visit</label>
            <input
              type="text"
              name="year"
              id="year"
              onChange={this.onInputChange}
              value={year}
            />
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              name="photo"
              id="photo"
              onChange={this.onInputChange}
              value={photo}
            />
            {/* add in photo here when I learn how */}
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) 
    );
  }
}
export default EditTrip;