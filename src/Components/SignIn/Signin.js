import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import GoogleLogin from 'react-google-login'

import * as actions from '../../Redux/Auth/AuthAction'
import CustomInput from '../customInputs'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.responseGoogle = this.responseGoogle.bind(this)
    }

    async onSubmit(formData){
      //use actions function- props use bcz take data from another component
      await this.props.signInAction(formData)

      //redirect to dashboard using normal signup
      if(!this.props.errorMessage){
          this.props.history.push('/dashboard')
      }
    }

    //google login code
    async responseGoogle(res){
        console.log('google login', res)
        await this.props.oauthGoogle(res.accessToken);

        //redirect to dashboard using googleplus
      if(!this.props.errorMessage){
        this.props.history.push('/dashboard')
    }
    }
    
    render(){
        const { handleSubmit } = this.props
        return(
            <div className="col-md-12 col-lg-12 customDiv"> 
                <div className="col-md-6 col-lg-6 col-xs 12">
                    <form onSubmit={ handleSubmit(this.onSubmit) }>
                        <fieldset>
                            <Field
                            name = "email"
                            type = "text"
                            id = "email"
                            placeholder="Enter your Email"
                            component = { CustomInput } />
                        </fieldset>
                        <fieldset>
                            <Field
                            name = "password"
                            type = "password"
                            id = "password"
                            placeholder="Enter your password"
                            component = {CustomInput} />
                        </fieldset>

                        { this.props.errorMessage ? 
                        <div className="alert alert-danger">{this.props.errorMessage}</div> : null }

                        <button type="submit" className="btn btn-primary">SignIn</button>
                    </form>
                </div>
                <div className="col-md-6 col-lg-6 col-xs-12">
                    <div className="alert alert-primary">
                        rigth side 
                    </div>
                    <div>
                        <button className="btn btn-default">Facebook</button>
                        <GoogleLogin
                            clientId="546256481688-21pkfu7ee5ud8k7eu976dmvi9hcbp6bh.apps.googleusercontent.com"
                            buttonText="Google"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle} 
                            className="btn btn-outline-danger"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

//function map props
 function mapStateToProps(state){
    return{
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form:'signin'})
)(SignIn)



