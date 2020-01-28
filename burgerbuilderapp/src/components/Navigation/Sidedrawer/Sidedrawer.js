import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import './Sidedrawer';

const Sidedrawer = (props) => {

    return (
        <div className="Sidedrawer">
            <Logo />
            <nav>
                <Navigation />
            </nav>

        </div>
    )
}

export default Sidedrawer
