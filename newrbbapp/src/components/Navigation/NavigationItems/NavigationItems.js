import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavigationItems.css';

const NavigationItems = (props)  =>{
    return (
        <ul className="NavigationItems">
            <NavItem itemName="Main Menu" link ="/" active />
            <NavItem itemName="Burger Builder" link ="/" active={false} />
            <NavItem itemName="My Orders" link ="/orders" />
            <NavItem itemName="CheckOut" link ="/checkout" />
            <NavItem itemName="Contact Us" link ="/" />
        </ul>
    )
}

export default NavigationItems
