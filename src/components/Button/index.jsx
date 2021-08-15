import React from 'react'
import './Button.scss'
;
const Button = ({type='button', className ,children, ...rest }) => {
    return (
        <button {...rest} className = {`button ${className}`} type={type}>
            {children}
        </button>
    )
}

export default Button
