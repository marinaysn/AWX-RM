import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import './Sidedrawer';

const Sidedrawer = (props) => {

    return (
        <div className="Sidedrawer">
            <div className="Logo">
                <Logo height="48px" />
            </div>
            <nav>
                <Navigation />
            </nav>

        </div>
    )
}

export default Sidedrawer
