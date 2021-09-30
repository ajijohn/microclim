import React, { Component, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './css/navbar.css'
import { IconContext } from 'react-icons';

function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const [closeb, setCloseb] = useState(false);
    const showSidebar = () =>{
      setSidebar(!sidebar);
      console.log("Show side bar")
      setCloseb(!closeb)
    }

    const closeSidebar = () => {
      setCloseb(!closeb)
    }
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars id="fa-icon" onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <p className="title"> Microclim </p>
                <Link to='#' className={closeb ? 'menu-bars' : 'nav-menu'} >
                  <AiIcons.AiOutlineClose id="fa-close" onClick={closeSidebar}/>
                </Link>
              </li>
              <li key="index" className="nav-text"> 
                <Link to="/"><span> Home </span></Link>
              </li>
              <li key="index" className="nav-text"> 
                <Link to="#services"><span> Services </span></Link>
              </li>
              <li key="index" className="nav-text"> 
                <Link to="/login"><span> Dashboard </span></Link>
              </li>
              <li key="index" className="nav-text"> 
                <Link to="/register"><span> Register </span></Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}
export default Navbar;

