import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {

    constructor(){
        super()
        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:'',
                 password: ''
            })
        }catch(err){
            console.log(err)
        }
        
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
                <h2 className='title'>I already have an acount</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='Email'
                    type='email'
                    name='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    label='Password'
                    type='password'
                    name='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sing In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleButton>Sing In With Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
