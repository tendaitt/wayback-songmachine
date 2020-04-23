import React from 'react';
import { Component } from 'react';
import './App.css';
import Home from './Home';

export const authEndpoint = 'https://accounts.spotify.com/authorize?'

const clientId = '';
const redirectUri = '';
const responseType = 'token';
// TODO add state
const scopes = [
  'playlist-modify-public',
  'playlist-modify-private'
]

const hash = window.location.hash.substring(1).split("&").reduce(function(initial, item) {
  if (item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

window.location.hash = "";

class App extends Component {

  constructor() {

    super();

    this.state = {

      token: null,
    }
  };

  componentDidMount() {

    let _accessToken = hash.access_token;

    if (_accessToken) {

      this.setState({
        accessToken: _accessToken
      });
    }
  };

  render() {

    return (

      <div>
        <header className="App-header">
          {!this.state.token && (
            <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=${responseType}&show_dialog=true`}>
            Login to Spotify
            </a>
          )}
          {this.state.token && (
            <Home/>
          )}
        </header>
      </div>

    );
  }
}

export default App;