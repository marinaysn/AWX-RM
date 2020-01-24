import React from 'react';
import './BuildControl.css'

const BuildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less"> - </button>
            <button className="More"> + </button>
        </div>
    )
}

export default BuildControl
