import React from 'react'

const input = (props) => {
    return (
        <div>

            <p>Please enter you name:</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )
}

export default input;
