import React, { Fragment } from 'react';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './Footer.js';
import './css/index.css';
import Maps from './leaflet';

export default function index() {
  return (
    <Fragment>
        <div className="index"> 
          <h2> Web dashboard</h2>
          <div className="dash"> 
            <div className="sec1">
              <Maps />
            </div>
            <div className="sec2"></div>
          </div>
        </div>
        <Footer />
    </Fragment>
  )
}
