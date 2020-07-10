import React, { Component } from 'react'

class CustomInput extends Component{
    render(){
        const { input: {value, onChange }} = this.props
        return(
            <div>
                <input 
                    id={this.props.id}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    className="form-control"
                    value={value}
                    onChange={onChange}/>
            </div>
        )
    }
}

export default CustomInput