import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import CreateTrip from './CreateTrip';
import Trips from './Trips';
import Home from './Home';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import EditTrip from './EditTrip';

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <Switch>
        {/* <Route exact path="/trips" render={(props) => <Trips {...props} myProp="my prop" />} /> */}
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trips/create" component={CreateTrip} />
        <Route exact path="/trips/:id/edit" component={EditTrip} />
        <Route component={NoMatch} />
      </Switch>
      </>
    );
  }
}

export default App;
