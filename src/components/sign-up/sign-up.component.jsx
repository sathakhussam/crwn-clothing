import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email:'',
            password:'',
            passwordConfirm:''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()

        const {displayName, email, password, passwordConfirm} = this.state
        if (password!==passwordConfirm){
            return alert('Passwords Dont Match')
        } 
        try{
            const user = await auth.createUserWithEmailAndPassword(email, password)
            
            await auth.createUserProfileDocument(user, displayName)
            this.setState({
                displayName: '',
                email:'',
                password:'',
                passwordConfirm:''
            })
        }catch(err) {
            console.log(err)
        }
    }

    render(){
        return <div className='sign-up'>
            <h2 className="title">I do not have an account</h2>
            <span>Create an account with email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                HandleChange={this.handleChange}
                name='displayName'
                type='name'
                value={this.state.displayName}
                label='Name'
                required
                />
                <FormInput
                HandleChange={this.handleChange}
                name='email'
                type='email'
                value={this.state.email}
                label='Email'
                required
                />
                <FormInput
                HandleChange={this.handleChange}
                name='password'
                type='password'
                value={this.state.password}
                label='Password'
                required
                />
                <FormInput
                HandleChange={this.handleChange}
                name='passwordConfirm'
                type='password'
                value={this.state.passwordConfirm}
                label='Password Confirm'
                required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    }
}

export default SignUp