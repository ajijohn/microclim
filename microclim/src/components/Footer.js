import React, { Fragment } from 'react';
import './css/Home.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/bootstrap/css/bootstrap.min.css';

<script crossorigin src="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"></script>
export default function Footer() {
  return (
    <Fragment>
       <footer className="footer text-center">
            <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        Please add any questions, concerns, or suggestions as issues on the project’s GitHub page
                    </li>

                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="https://github.com/ajijohn/ebm/issues">
                            <i className="icon-social-github"></i>
                        </a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; 2014-2021 University of Washington. Aji John.</p>
                <p className="text-muted small mb-0"><a href="/tos">Terms of Service</a> | <a href="/pp">Privacy Policy</a></p>
                <ul className="pull-right list-inline">
                    <li><b>beta release</b></li>
                    <li>
                        <p>1.00</p>
                    </li>
                </ul>
            </div>
        </footer>
    </Fragment>
  )
}
