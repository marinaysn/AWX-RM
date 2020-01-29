import React from 'react';
import imgLogo from '../../assets/images/logo.png'
import './Logo.css'

const Logo =(props) => {
    console.log('=================');
    console.log(props.height)
    return (
        <div className="Logo" style={{ height: props.height}} >
            <img src={imgLogo} alt="burger Logo" />
        </div>
    )
}
export default Logo;

