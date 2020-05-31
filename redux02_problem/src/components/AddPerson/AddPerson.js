import React, { Component } from 'react'
import './AddPerson.css';

export class AddPerson extends Component {

    state = {
        name: '',
        age: null
    }

    nameChangedHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    ageChangedHandler = (event) => {
        this.setState({ age: event.target.value });
    }


    render() {
        return (
            <div className="AddPerson">
                <div className='inputElementsDiv'>
                    <input
                        className='el'
                        type="text"
                        placeholder='Name'
                        onChange={this.nameChangedHandler}
                        value={this.state.name}
                    />
                    <input
                        className='el'
                        type="number"
                        placeholder='Age'
                        onChange={this.ageChangedHandler}
                        value={this.state.age} />
                </div>

                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson
