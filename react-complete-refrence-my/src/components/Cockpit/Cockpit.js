import React, { useEffect } from 'react';
import './Cockpit.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('1111 - COCKPIT - useEffect')
        //HTTP request
        setTimeout(()=>{
           // alert('Saved data to cloud')
        }, 1000);
        return ()=>{
            console.log('111 - Cockpit.js - useEffect - will unmount')
        }
    },[])

    useEffect(() =>{
        console.log('222- - Cockpit.js - 2nd useEffect()')
        return ()=>{
            console.log('Cleanup work in second useeffect')
        }
    })

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

export default React.memo(Cockpit);
