import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Splash from './components/Splash/Splash'
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Splash />
      <Switch>
        {/* <Route path="/battle" component={ComponentNameHERE} /> */}
      </Switch>
      </div>
    );
  }
}

export default App;
