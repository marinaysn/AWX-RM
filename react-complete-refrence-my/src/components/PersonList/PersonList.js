import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class PersonList extends Component {
    state = {}

    static getDerivedStateFromProps(props, state) {

        console.log('PersonList.js - (1) getDerivedStateFromProps');
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('PersonList.js - (2) shouldComponentUpdate');

        if (nextProps.persons !== this.props.persons ||
            this.props.changed !== nextProps.changed ||
            this.props.clicked !== nextProps.clicked
        ) {
            return true
        }
        else {
            return false
        }

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('PersonList.js - (3) shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('PersonList.js - (3) componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('444 - PersonList.js - (4) componentWillUnmount');
    }


    render() {

        console.log('8888 - PersonList.js - (4) render');

        return this.props.persons.map((p, index) => {
            return <ErrorBoundary key={p.id}><Person
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, p.id)}
                name={p.name}
                age={p.age}

            />
            </ErrorBoundary>
        })
    }
}

export default PersonList;

// const PersonList = (props) =>{

//    // console.log('5555 - PersonsList.js - List rendering...');

//     return props.persons.map((p, index) => {
//         return <ErrorBoundary key={p.id}><Person
//             click={() => props.clicked(index)}
//             changed={(event) => props.changed(event, p.id)}
//             name={p.name}
//             age={p.age}

//         />
//         </ErrorBoundary>
//     })
// }

// export default PersonList;
