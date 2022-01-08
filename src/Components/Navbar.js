import React from 'react';
import New from '../images/new.jpeg'
import Student from '../images/Student.jpg'
import airlines from '../images/airlines.jpg'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/airlines">
                    <img src={airlines} height="50px" />
                </Link>


                <div>
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            {/* <Link  className="btn btn-primary mr-3" to = {'/AddPassenger'} >
                            Add Airlines
                            </Link> */}
                           
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-a dropdown-toggle"
                                href="!#"
                                id="navbarDropdown"
                                data-toggle="dropdown"
                            >
                                <img src={New} height="50px" />
                                <span className="ml-2 navbar-text">Jatin Malik</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="!#">
                                    Profile
                                </a>
                                <a className="dropdown-item" href="!#">
                                    Logout
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="!#">
                                    Ads
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;