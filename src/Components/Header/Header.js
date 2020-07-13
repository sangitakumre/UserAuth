import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css'
import * as actions from '../../Redux/Auth/AuthAction'


class Header extends Component{
    constructor(props){
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    signOut() {
        console.log('signout')
        this.props.signOut()
    }

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <NavLink to="/">FashionStyle</NavLink>
                <div className="nav-list">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
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
                        { !this.props.isAuth ?
                            [<li className="nav-item" key="signup">
                                <NavLink to="/signup" activeClassName="activeNav">SignUp</NavLink>
                            </li>,
                            <li className="nav-item" key="signin">
                                <NavLink to="/signin" activeClassName="activeNav">Sign In</NavLink>
                            </li> ] : null }

                            { this.props.isAuth ?
                            <li className="nav-item">
                                <NavLink to="signout" activeClassName="activeNav" onClick={this.signOut}>SignOut</NavLink>
                            </li> : null }
                    </ul>
                </div>
            </nav>
        )
    }
}

export const mapStateToProps = state =>{
    return{
        isAuth: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps, actions)(Header)