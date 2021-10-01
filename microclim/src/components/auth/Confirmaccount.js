import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";
import '../css/auth.css';
import Footer from '../Footer.js';

class ConfirmUser extends Component {
  state = {
    username: "",
    code: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      const user = await Auth.confirmSignUp(this.state.username, this.state.code);
      console.log(user);
      this.props.history.push("/login");
    }catch(error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="section auth">
        <div className="container" id="bg1">
          <div className="card is-shady" id="bg2">
            <div className="head1">
              <h1 className="head2">Welcome</h1>
            </div><br></br>
          <p>You have successfully registered a new account.</p>
          <p>We've sent you an email with a confirmation code. Please enter the confirmation code to confirm your account.</p><br></br>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control1">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control1 ">
                <input 
                  className="input" 
                  type="number"
                  id="code"
                  placeholder="Confirmation Code"
                  value={this.state.code}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control" id="btn1">
                <button className="button1 is-success">
                  Confirm
                </button>
              </p>
            </div>
            <div className="field">
              <p className="control" id="link">
                <a href="/resendcode">Resend Code ?</a>
              </p>
            </div>
          </form>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default ConfirmUser;