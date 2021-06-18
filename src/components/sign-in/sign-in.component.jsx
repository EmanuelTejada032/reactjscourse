import React, { Component } from 'react'

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
                    <label htmlFor='email'>Email</label>
                    <input 
                    type='email'
                    id='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
                     <label htmlFor='password'>Password</label>
                    <input 
                    type='password'
                    id='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />
                    <input type='submit' value='Sign In' />
                </form>
            </div>
        )
    }
}
