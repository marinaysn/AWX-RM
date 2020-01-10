import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const PersonList = (props) =>{

   // console.log('5555 - PersonsList.js - List rendering...');

    return props.persons.map((p, index) => {
        return <ErrorBoundary key={p.id}><Person
            click={() => props.clicked(index)}
            changed={(event) => props.changed(event, p.id)}
            name={p.name}
            age={p.age}

        />
        </ErrorBoundary>
    })
}

export default PersonList;
