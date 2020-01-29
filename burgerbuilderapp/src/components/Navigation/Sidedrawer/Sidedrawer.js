import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import './Sidedrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary'

const Sidedrawer = (props) => {
    let attachedClassed = ["SideDrawer", "Closed"];

    if (props.open){
        attachedClassed = ["SideDrawer", "Open"];
    }

    return (
        <Auxiliary>

             <Backdrop show ={props.open}
                clicked={props.closed}
             />

            <div className={attachedClassed.join(' ')}>
                {/* <div className="Logo">
                <Logo height="48px" marginBottom="32px" />
            </div> */}

                <nav>
                    <Navigation />
                </nav>

            </div>
        </Auxiliary>
    )
}

export default Sidedrawer
