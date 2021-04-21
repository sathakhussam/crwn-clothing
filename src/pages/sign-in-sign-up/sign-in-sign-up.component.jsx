import React from 'react';
import './sign-in-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignOut from '../../components/sign-up/sign-up.component'
const SignInSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignOut />
    </div>
)

export default SignInSignUpPage