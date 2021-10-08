import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";
import { Auth } from 'aws-amplify';
import './css/account.css';
import Footer from './Footer';

class Update_Location extends Component {
    state = {
      address:"",
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    }
  
    clearErrorState = () => {
      this.setState({
        errors: {
          cognito: null,
          blankfield: false,
        }
      });
    }
  
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
  
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        let result = await Auth.updateUserAttributes(user, {
            'address': this.state.address
        }
        )
        console.log(result)
        this.props.history.push("/Account");
      } catch (error) {
        let err = null;
        !error.message ? err = { "message": error } : err = error;
        this.setState({
          errors: { ...this.state.errors, cognito: err }
        });
        console.log(err);
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
        <div className="card is-shady" id="bg2">
            <div className="head1">
              <h2 className="head2">Update Location</h2>
            </div>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  id="address"
                  placeholder="Enter the Location"
                  value={this.state.address}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control" id="btn">
                <button className="btn" id="btn4"> Update Location </button>
              </p>
            </div>
          </form>
          </div>
        </div>
        <Footer />
      </section>
      )
    }
}
export default Update_Location;
    