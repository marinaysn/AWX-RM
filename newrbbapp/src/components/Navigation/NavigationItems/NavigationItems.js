import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavigationItems.css';

const NavigationItems = (props)  =>{
    return (
        <ul className="NavigationItems">
            <NavItem itemName="Main Menu" link ="/" active />
            <NavItem itemName="Burger Builder" link ="/" active={false} />
            <NavItem itemName="CheckOut" link ="/" />
            <NavItem itemName="Contact Us" link ="/" />
        </ul>
    )
}

export default NavigationItems
