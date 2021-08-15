import React from 'react'
import "./Img.scss"

const Img = ({src, alt, className, ...rest}) => {
    return <img {...rest} className = {`img ${className}`} src={src} alt={alt}/>
}

export default Img
