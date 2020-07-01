import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  state = {
    auth: false,
    loading: true,
  };

<<<<<<< HEAD
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3000/status", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.status >= 400) {
        throw(new Error("not authorized"))
      } else {  
        const { jwt } = await response.json()
        localStorage.setItem('token', jwt)      
        this.setState({
          auth: true,
          loading: false,
        });
      }
    } catch(err) {
      console.log(err.message)
=======
  componentDidMount() {
    const token = localStorage.getItem("token"); 
    if (token === "password") {
      this.setState({
        auth: true,
        loading: false,
      });
    } else {
>>>>>>> 63efd711dc36ba2c783c4dece66b088cccd0106c
      this.setState({
        loading: false,
      });
    }
  }
<<<<<<< HEAD
  
  render() {
    const { loading, auth } = this.state;
=======
  render() {
    const { loading, auth } = this.state;

>>>>>>> 63efd711dc36ba2c783c4dece66b088cccd0106c
    if (!loading && !auth) {
      return <Redirect to="/" />
    } else {
      return !loading && (
      <Route 
        exact={this.props.exact}
        path={this.props.path} 
        component={this.props.component} 
        /> 
      );
    }
  }
}

export default PrivateRoute;
