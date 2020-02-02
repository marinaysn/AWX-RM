import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const Sidedrawer = props => {
  let attachedClassed = ['Sidedrawer', ' Close'];

  if (props.open) {
    attachedClassed = ['Sidedrawer', ' Open'];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClassed.join(' ')}>
        {/* <div className="Logo">
                <Logo height="48px" marginBottom="32px" />
            </div> */}

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default Sidedrawer;
