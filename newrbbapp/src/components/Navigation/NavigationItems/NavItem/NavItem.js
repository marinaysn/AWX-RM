import React from 'react';
import './NavItem.css';
import { NavLink } from "react-router-dom";

const NavItem = (props) => {

    return (
        <li className="NavItem">
            <NavLink to={props.link} activeClassName='activeStyle' 
            exact 
            replace > {props.itemName} </NavLink>
        </li>
    )
}

export default NavItem
