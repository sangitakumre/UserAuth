import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Redux/Auth/AuthAction'


class Dashboard extends Component {

  componentDidMount(){
    this.props.getSectets()
  }

  render(){
    return (
      <div className="App">
         Dashboard page<br/>
         the secrete key : {this.props.secret}
      </div>
    );
  }
 }

const mapStateToProps = (state) =>{
  return{
    secret: state.dash.secret
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
