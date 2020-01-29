import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'
const Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop show={props.show} 
            clicked={props.modalClosed} />
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opasity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliary>
    )
}

export default Modal
