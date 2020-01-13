import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class PersonList extends PureComponent {
    state = {}

    static getDerivedStateFromProps(props, state) {

        console.log('PersonList.js - (1) getDerivedStateFromProps');
        return state
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

        return (this.props.persons.map((p, index) => {
            return <ErrorBoundary key={p.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, p.id)}
                    name={p.name}
                    age={p.age}
                    isAuth={this.props.isAuthenticated}
                />
            </ErrorBoundary>
        })
        );
    }
}

export default PersonList;

