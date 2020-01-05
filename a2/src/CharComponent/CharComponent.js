import React from 'react'
import './CharComponent.css'

const  CharComponent = (props)  => {

    return (
        <div className='mainText' onClick={props.clicked} >
            <p>{props.change}</p>
        </div>
    )
}

export default CharComponent
