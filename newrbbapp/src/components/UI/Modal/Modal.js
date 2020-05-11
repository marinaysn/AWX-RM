import React, { Component } from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxilary/Auxiliary';

export class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('3 Modal: should component update')
    return  nextProps.show !== this.props.show || 
            nextProps.children !== this.props.children;
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('5 Modal: componentWillUpdate')
  }


  render() {

    console.log('4 Modal: render')
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
