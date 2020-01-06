import React from 'react';
import './Person.css'
import Radium from 'radium';


const person = (props) => {

    const style ={
        '@media (min-width: 900px)': {
            'width': '450px',
            'backgroundColor': 'rgb(232, 214, 248)'
        }

      
    };

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>

            <input type="text" onChange={props.changed} value={props.name} />
        </div>);
}

export default Radium(person);