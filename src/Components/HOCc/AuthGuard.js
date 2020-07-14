import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (OriginalComponent) =>{
    class MixedComponent extends Component{

        checkAuth(){
            if(!this.props.isAuth && !this.props.jwt_token){
                this.props.history.push('/')
            }
        }

        componentDidMount(){
            this.checkAuth();
        }

        componentWillUpdate(){
            this.checkAuth();
        }

        render(){
            return <OriginalComponent {...this.props} />
        }
    }

const mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuthenticated,
        jwt_token: state.auth.token
    }
}

    return connect(mapStateToProps)(MixedComponent)
};
