import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import CustomInput from '../customInputs'

class SignUp extends Component{

    onSubmit = (formData) => {
      console.log("onsubmit button")
      console.log("formData", formData)
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
                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </form>
                </div>
                <div className="col-md-6 col-lg-6 col-xs-12">
                    <div className="alert alert-primary">
                        rigth side 
                    </div>
                    <div>
                        <button className="btn btn-default">Facebook</button>
                        <button className='btn btn-default'>Google</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({ form:'signup'})(SignUp)