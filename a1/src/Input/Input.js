import React from 'react'

const input = (props) => {
    return (
        <div>

            <p>Please enter you name:</p>
            <input type="text" onChange={props.changed} value={props.originalName} />

        </div>
    )
}

export default input;
