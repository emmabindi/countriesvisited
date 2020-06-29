import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import Create from './Create';
import Index from './Index';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/trips" component={Index} />
        <Route path="/" component={Home} />
        <Route path="/create" component={Create} />
      </Switch>
    );
  }
}

export default App;
