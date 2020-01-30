import React from 'react';
import './Toolbar.css';
import  Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            { <div className="Logo">
                <Logo  height="90%" />
            </div> }
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header> ) 
}

export default Toolbar;
