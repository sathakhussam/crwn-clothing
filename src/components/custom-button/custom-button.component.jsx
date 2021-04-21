import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, signInWithGoogle, ...OtherProps}) => (
    <button className={`${signInWithGoogle ? 'sign-in-with-google': ''} custom-button`} {...OtherProps}>
        {children}
    </button>
)

export default CustomButton