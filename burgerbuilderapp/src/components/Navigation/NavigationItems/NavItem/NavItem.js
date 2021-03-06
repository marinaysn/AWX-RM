import React from 'react';
import './NavItem.css';

const NavItem = (props) => {

    return (
        <li className="NavItem">
            <a href={props.link} className={props.active ? " active " : null } >{props.itemName}</a>
        </li>
    )
}

export default NavItem
