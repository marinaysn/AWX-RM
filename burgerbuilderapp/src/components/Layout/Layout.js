import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const Layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar />
            <Sidedrawer />
            <main className="mainContent">
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;



