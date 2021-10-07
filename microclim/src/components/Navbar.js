import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default class navContent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            sidebar : false,
            closeb:false
        }
    }
    showSidebar = () =>{
      this.setState(prevState => ({ sidebar: !prevState.sidebar}))
      this.setState(prevState => ({ closeb: !prevState.closeb}))
    }

    closeSidebar = () => {
      this.setState(prevState => ({ closeb: !prevState.closeb}))
    }

    handleLogOut = async event => {
        try {
          Auth.signOut();
          this.props.auth.setAuthStatus(false);
          this.props.auth.setUser(null);
        }catch(error) {
          console.log(error.message);
        }
    }
    
    render() {
        return (
            <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars id="fa-icon" onClick={this.showSidebar} />
              </Link>
            </div>
            <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={this.showSidebar}>
                <li className='navbar-toggle'>
                  <p className="title">Microclim </p>
                  <Link to='#' className={this.state.closeb ? 'menu-bars' : 'nav-menu'} >
                    <AiIcons.AiOutlineClose id="fa-close" onClick={this.closeSidebar}/>
                  </Link>
                </li>
                {!this.props.auth.isAuthenticated && (
                <li key="index" className="nav-text"> 
                    <Link to="/"><span> Home </span></Link>
                </li>
                )}
                {!this.props.auth.isAuthenticated && (
                <li key="services" className="nav-text"> 
                    <Link to="#services"><span> Services </span></Link>
                </li>
                )}
                {!this.props.auth.isAuthenticated && (
                <li key="login" className="nav-text"> 
                    <Link to="/login"><span> Dashboard </span></Link>
                </li>
                )}
                {this.props.auth.isAuthenticated && (
                  <li key="Ind" className="nav-text">
                    <span>Welcome {this.props.auth.user.username}</span>
                  </li>
                )}
                {this.props.auth.isAuthenticated && ( 
                  <li key="Home" className="nav-text">
                    <Link to="/Index"><span>Home</span></Link>
                  </li>
                )}
                {this.props.auth.isAuthenticated && ( 
                  <li key="Account" className="nav-text">
                    <Link to="/Account"><span>Account</span></Link>
                  </li>
                )}
                {this.props.auth.isAuthenticated && (
                    <li key="Index" className="nav-text">
                        <Link to="/" onClick={this.handleLogOut}><span>Logout</span></Link>
                    </li>
                )}
                

              </ul>
            </nav>
          </IconContext.Provider>
        )
    }
}


