import React from 'react'
import './Button.scss'
;
const Button = ({type='button', className ,children, size='large', ...rest }) => {
    return (
        <button {...rest} className = {`button ${className} button--${size} `} type={type}>
            {children}
        </button>
    )
}

export default Button
