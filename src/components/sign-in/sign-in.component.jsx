import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import Forminput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }    

    HandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return <div className='signup-div'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form method="POST" onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} HandleChange={this.HandleChange} label='Email' required />
                
                <Forminput name="password" type="password" value={this.state.password} HandleChange={this.HandleChange} label='Password' required/>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton signInWithGoogle onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    }
}

export default SignIn