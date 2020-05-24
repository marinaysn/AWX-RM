import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavigationItems.css';


const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavItem itemName="Main Menu" link="/" />
            {/* <NavItem itemName="Burger Builder" link ="/"  /> */}
            <NavItem itemName="My Orders" link="/orders" />
            <NavItem itemName="CheckOut" link="/checkout" />
            <NavItem itemName="Contact Us" link="/contact-data" />
        </ul>
    )
}

export default NavigationItems
