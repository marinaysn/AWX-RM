import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxilary/Auxiliary';

const Sidedrawer = props => {
  let attachedClassed = ['Sidedrawer', ' Close'];

  if (props.open) {
    attachedClassed = ['Sidedrawer', ' Open'];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClassed.join(' ')}>
    
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default Sidedrawer;
