import './App.css';
import { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    const authProps = {
    }
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;