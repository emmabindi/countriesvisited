import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import CreateTrip from './CreateTrip';
import Trips from './Trips';
import Home from './Home';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import EditTrip from './EditTrip';
import PrivateRoute from './PrivateRoute'
import Secrets from './Secrets';
import Login from './Login';
import SignUp from './SignUp';
import ViewTrip from './ViewTrip';

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        {/* <Route exact path="/trips" render={(props) => <Trips {...props} myProp="my prop" />} /> */}
        <PrivateRoute exact path="/secrets" component={Secrets} />
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/trips" component={Trips} />
        <PrivateRoute exact path="/trips/create" component={CreateTrip} />
        <PrivateRoute exact path="/trips/:id" component={ViewTrip} />
        <PrivateRoute exact path="/trips/:id/edit" component={EditTrip} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/sign-up" component={SignUp} />
        {/* <Route exact path="/countries" component={Countries} /> */}
        <Route component={NoMatch} />
        <PrivateRoute exact path="/secrets" component={Secrets} />
      </Switch>
      </>
    );
  }
}

export default App;