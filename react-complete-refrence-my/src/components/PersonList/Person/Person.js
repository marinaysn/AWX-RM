import React, { Component } from 'react';
import './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClassName from '../../../hoc/withClassName';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();

        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js - (4) render method...');

        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>
                    }
                </AuthContext.Consumer>

                < p onClick={this.props.click} >
                    I am {this.props.name} and I am {this.props.age} years old
                    </p >
                <p>{this.props.children}</p>
                <input type="text"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name} />

            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    channged: PropTypes.func
};

export default withClassName(Person, 'Person');

// const person = (props) => {

//     console.log('4444 - Person.js - main method...');

//     return (


//         <div className='Person' >
//             < p onClick={props.click} > I am {props.name} and I am {props.age} years old</p >
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     );
// }

// export default person;