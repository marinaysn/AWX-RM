import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar />
            <main className="mainContent">
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;



