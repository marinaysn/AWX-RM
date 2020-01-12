import React, { useEffect } from 'react';

const Cockpit = (props) => {

    useEffect(() => {
        console.log('1111 - COCKPIT - useEffect')
        //HTTP request
        setTimeout(()=>{
            alert('Saved data to cloud')
        }, 1000);
    },[])

    let classes = [];

    if (props.personArrLength <= 2) {
        classes.push('red')
    }
    if (props.personArrLength <= 1) {
        classes.push('bold')
    }

    console.log('6666 - Cockpit.js - nice and slow...');

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>working...</p>

            <button
                className={props.showPerson ? "buttonRed" : "buttonApp"}
                alt={props.showPerson}
                onClick={props.clicked}>Show the Persons List
          </button>
        </div>
    )
}

export default Cockpit
