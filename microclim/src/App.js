import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import Home from './components/Home';
import ForgotPassword from './components/auth/ForgotPassword';
import Index from './components/Index';
import Confirmaccount from './components/auth/Confirmaccount';
import { Auth } from 'aws-amplify';
import Navbar from './components/Navbar';
import Des from './components/des';
import Usage from './components/usage';
import Account from './components/Account';


class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }
  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/Index" render={(props) => <Index {...props} auth={authProps} />} />
              <Route exact path="/Confirmaccount" render={(props) => <Confirmaccount {...props} auth={authProps} />} />
              <Route exact path="/Des" render={(props) => <Des {...props} auth={authProps} />} />
              <Route exact path="/Usage" render={(props) => <Usage {...props} auth={authProps} />} />
              <Route exact path="/Account" render={(props) => <Account {...props} auth={authProps} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
