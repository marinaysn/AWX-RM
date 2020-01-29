import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
//     console.log('-----------------')
//     console.log(props.active)
// console.log(props.itemName)
//     console.log('-----------------')
    return (
        <li className="NavItem">
            <a href={props.link} className={props.active ? " active " : null } >{props.itemName}</a>
        </li>
    )
}

export default NavItem
