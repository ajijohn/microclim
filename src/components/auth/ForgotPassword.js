import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
import '../css/auth.css';
import Footer from '../Footer.js';

class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
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
      const forg = await Auth.forgotPassword(this.state.email);
      console.log(forg)
      this.props.history.push('/forgotpasswordverification');
    }catch(error) {
      console.log(error);
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="section auth">
        <div className="container" id="bg1">
          <div className="card is-shady"  id="bg2">
            <div className="head1">
              <h2 className="head2">Forgot your password?</h2>
            </div><br></br>
          <p>
            Please enter the email address associated with your account and we'll
            email you a password reset link.
          </p>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.forgotPasswordHandler}>
            <div className="field">
              <p className="control">
              <p className="label1"> Email </p>
                <input
                  type="email"
                  className="input"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control"  id="btn">
                <button className="button is-success">
                  Submit
                </button>
              </p>
            </div>
            <div className="field">
              <p className="control" id="link">
                <a href="/ForgotPassword">Forgot password ?</a>
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

export default ForgotPassword;