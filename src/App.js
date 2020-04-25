import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Error from './Error';

class App extends Component {
  
  render() {
    
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home/:accessToken/:refreshToken" component={Home}/>
          <Route path="/error/:errorMessage" component={Error}/>
        </Switch>
      </main>
    );
  }
}

export default App;