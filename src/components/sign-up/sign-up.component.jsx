import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

import { auth, createProfileDocument } from '../../firebase/firebase.utils'

export default class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, displayName, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('Password don\'t match');            
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword: '',
            })
        }catch(err){
            console.log(err)
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name] : value})
    }
    render() {
        const {email, displayName, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account yet</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label='Display Name'
                        type='text'
                        name='displayName'
                        id='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        label='Email'
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        label='Password'
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        label='Confirm password'
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        value={ confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
