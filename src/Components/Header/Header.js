import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import './header.css'

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <NavLink to="/">FashionStyle</NavLink>
                <div className="nav-list">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="activeNav">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" activeClassName="activeNav">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" activeClassName="activeNav">About</NavLink>
                        </li>
                    </ul>

                    <ul className="">
                        <li className="nav-item">
                            <NavLink to="/signup" activeClassName="activeNav">SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signin" activeClassName="activeNav">Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="signout" activeClassName="activeNav">SignOut</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header