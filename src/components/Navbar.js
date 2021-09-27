import React, { Fragment, useState } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import './css/navbar.css';
import { IconContext } from 'react-icons';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
  return (
    <Fragment>
        <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul class="nav-menu-items" onClick={showSidebar}>
                <li class="nav-bar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li><a class="js-scroll-trigger" href="/">Home</a></li>
                <li><a class="js-scroll-trigger" href="/">Services</a></li>
                <li><a class="js-scroll-trigger" href="/">Dashboard</a></li>
                <li><a class="js-scroll-trigger" href="/">Login</a></li>
            </ul>
        </nav>
        </IconContext.Provider>
    </Fragment>
  )
}
