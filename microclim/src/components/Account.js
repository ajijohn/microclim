import React, { Component } from 'react';
import './css/account.css';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

class Account extends Component {
  render() {
    return (
      <section className="section auth">
        <div className="container" id="bg1">
        <div className="card is-shady" id="bg2">
            <div className="head1">
              <h2 className="head2">Profile Information</h2>
              <hr />
            </div>
            <div className="field1">
              <p className="control">
                <p className="label1"> Email </p>
                <input 
                  className="input" 
                  type="text"
                  id="email"
                  placeholder={this.props.auth.user.attributes.email}
                  readOnly
                />
              </p>
            </div>
            <div className="field1">
              <p className="control">
                <p className="label1"> Username  </p>
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  placeholder={this.props.auth.user.username}
                  readOnly
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <p className="label1"> Website </p>
                <input 
                  className="input" 
                  type="text"
                  id="website"
                  placeholder={this.props.auth.user.attributes.website}
                />
                <button type="submit" className="btn" id="btnWebsite"><Link to="/updateWebsite">Update Website</Link></button>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <p className="label1"> Location  </p>
                <input 
                  className="input" 
                  type="text"
                  id="location"
                  placeholder={this.props.auth.user.attributes.address}
                />
                 <button type="submit" className="btn" id="btnWebsite"><Link to="/Update_Location">Update Location</Link></button>
              </p>
            </div>
            <div className="button"> 
             <button type="submit" className="btn"><Link to="/forgotpassword">Reset Password</Link></button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
export default Account;