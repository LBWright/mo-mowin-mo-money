import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SingleLot from './components/SingleLot/SingleLot';


class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/battle" component={ComponentNameHERE} /> */}
        <Route path='/lot' component={SingleLot} />
      </Switch>
    );
  }
}

export default App;
