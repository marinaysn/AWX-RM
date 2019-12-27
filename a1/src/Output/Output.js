
import React from 'react'
import './Output.css'

const output = (props) => {
    return (
        <div className='outputdiv'>
            <p>Hello friends!!! Welcome!</p>
            <p>My name is {props.name}</p> 
            <hr />           
        </div>
    )
}

export default output;
