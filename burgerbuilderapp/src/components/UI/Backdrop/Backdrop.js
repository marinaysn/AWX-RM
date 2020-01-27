import React from 'react';
import './Backdrop.css';

const Backdrop =(props) => {
 return  props.show ? <div className="Backdrop" onClick={props.orderCancelled}> </div> : null
}

export default Backdrop
