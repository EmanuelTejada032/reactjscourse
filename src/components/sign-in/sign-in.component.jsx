import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

export default class SignIn extends Component {

    constructor(){
        super()
        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            email:'',
            password: ''
        })
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='Email'
                    type='email'
                    id='email'
                    name='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    label='Password'
                    type='password'
                    id='password'
                    name='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sing In</CustomButton>
                </form>
            </div>
        )
    }
}
