import React from 'react';
import imgLogo from '../../assets/images/logo.png'
import './Logo.css'

const Logo =(props) => {
    return (
        <div className="Logo">
            <img src={imgLogo} alt="burger Logo" />
        </div>
    )
}
export default Logo;

