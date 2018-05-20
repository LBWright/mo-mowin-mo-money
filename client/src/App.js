import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Invoice from './components/Invoice/Invoice.js';


class App extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/battle" component={ComponentNameHERE} /> */}
        <Route path="/Invoice" component={Invoice} />
      </Switch>
    );
  }
}

export default App;
