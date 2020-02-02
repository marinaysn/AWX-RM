import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

export class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('0. Modal - should update');
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {

    console.log('00. Modal - should update');
  }

  render() {
    console.log('000. Modal - should update');

    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className='Modal'
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}
export default Modal;
