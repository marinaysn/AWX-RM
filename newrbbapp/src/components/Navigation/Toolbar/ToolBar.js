import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Sidedrawer/Menu/Menu';

const Toolbar = (props) => {
  return (
    <header className='Toolbar'>

      <Menu switchMenu={props.switchMenuItems} />

      <div className="Logo">
        <Logo height="90%" />
      </div>
      <nav className='DesktopOnly'>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar;

