import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
//import classes from '../Layout/Layout.css'
import Burger from '../Burger/Burger'
import './Layout.css';

const Layout = (props) => {
    return (
        <Auxiliary>
            <div>
                ToolBar, SideDrawer, Backdrop
            </div>
            <main className="mainContent">
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;



