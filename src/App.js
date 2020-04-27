import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Error from './Error';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App(){

  const classes2 = useStyles();

  return (
      <main>
        <AppBar position="static" style={{backgroundColor: '#101317'}}>
          <Toolbar>
            <Typography variant="h5" className={classes2.title}>The Wayback Song Machine</Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home/:accessToken/:refreshToken" component={Home}/>
          <Route path="/error/:errorMessage" component={Error}/>
        </Switch>
      </main>
    );
}

export default App;
