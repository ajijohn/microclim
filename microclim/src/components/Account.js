import React, { Component, Fragment } from 'react';

export default class Account extends Component {

    render() {
        return(
            <Fragment>
                <section className="section auth">
                    <div className="container">
                        <div className="card is-shady">
                            <div className="heading2">
                                <h1 className="heading1">My Account</h1> <br></br>
                            </div><br></br>
                            <div className="field">
                            <p className="head3">Username</p>
                                <p className="control has-icons-left has-icons-right">
                                    <input 
                                    className="input" 
                                    type="text"
                                    id="username"
                                    aria-describedby="userNameHelp"
                                    placeholder="Username"
                                    value={this.props.auth.user.username} readOnly
                                    />
                                <span className="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <button type="button" className="btn1 cancel"> <a className="whi" href="/changepassword">Change Password</a> </button>
                                </p>
                            </div><br></br>
                            <div className="field">
                            <p className="head3">Email</p> 
                                <p className="control has-icons-left has-icons-right">
                                    <input 
                                    className="input" 
                                    type="email"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email id"
                                    value={this.props.auth.user.attributes.email} readOnly
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                    </span>
                                    <button type="button" className="btn1 cancel"> <a className="whi" href="/changeemail">Change Email</a></button>
                                </p>
                            </div><br></br>
                            <div className="field">
                            <p className="head3">Website</p> 
                                <p className="control has-icons-left has-icons-right">
                                    <input 
                                    className="input" 
                                    type="text"
                                    id="website"
                                    aria-describedby="emailHelp"
                                    placeholder="Website"
                                    value={this.props.auth.user.attributes.website} readOnly
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-globe"></i>
                                    </span>
                                    <button type="button" className="btn1 cancel"> <a className="whi" href="/changewebsite">Update Website</a></button>
                                </p>
                            </div><br></br>
                            <div className="field">
                            <p className="head3">Address</p> 
                                <p className="control has-icons-left has-icons-right">
                                    <input 
                                    className="input" 
                                    type="text"
                                    id="address"
                                    aria-describedby="emailHelp"
                                    placeholder="Address"
                                    value={this.props.auth.user.attributes.address} readOnly
                                    />
                                    <span className="icon is-small is-left">
                                    <i className="fas fa-map-pin"></i>
                                    </span>
                                    <button type="button" className="btn1 cancel"> <a className="whi" href="/changeaddress">Update Address</a></button>
                                </p>
                            </div><br></br>
                            <div className="field">
                            <p className="head3">Zone</p>
                                <p className="control has-icons-left has-icons-right"> 
                                    <input 
                                    className="input" 
                                    type="text"
                                    id="zoneinfo"
                                    aria-describedby="emailHelp"
                                    placeholder="Your Zone"
                                    value={this.props.auth.user.attributes.zoneinfo} readOnly
                                    />
                                    <span className="icon is-small is-left">
                                    <i class="fas fa-map-marker"></i>
                                    </span>
                                    <button type="button" className="btn1 cancel"> <a className="whi" href="/changezone">Update Zone</a></button>
                                </p>
                            </div><br></br>
                        </div>
                    </div>
                </section>
            </ Fragment>
        )
    }
}