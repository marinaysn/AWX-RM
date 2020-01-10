import React from 'react';
//import './Person.css'
import styled from 'styled-components'


const StyledDiv = styled.div`
width: 50%;
margin: 7px auto;
border: 1px solid #eee;
box-shadow:  0 2px 3px #ccc;
padding: 16px;
text-align: center;
background-color: blanchedalmond;
border-radius: 3%;


@media(min-width:900px){

    width: 450px; 
    background-color: rgb(232, 214, 248);
}
`

const person = (props) => {

    console.log('4444 - Person.js - main method...');

    return (

        
        //<div className='Person' style={style}>
        <StyledDiv>
            < p onClick={props.click} > I am {props.name} and I am {props.age} years old</p >
            <p>{props.children}</p>

            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
        // </div>
    );
}

export default person;