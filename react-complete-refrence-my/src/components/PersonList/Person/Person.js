import React, { Component } from 'react';
import './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'

class Person extends Component {
    
    // static getDerivedStateFromProps(props, state) {

    //     console.log('4444 - Person.js - (1) getDerivedStateFromProps');
    //     return state
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('5555 - Person.js - (2) shouldComponentUpdate');
    //     return true
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('6666 - Person.js - (3) shouldComponentUpdate');
    // }

    render() {
        console.log('Person.js - (4) render method...');

        return (
            <Auxiliary>
           {/*  <div className='Person' > */}
                < p onClick={this.props.click} > I am {this.props.name} and I am {this.props.age} years old</p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
          {/*   </div> */}
          </Auxiliary>
        );
    }
}

export default Person;

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