import * as actionType from './actions'

const InitialState = {

    persons: []
}
const reducer = (state = InitialState, action) => {

    switch (action.type) {
        case actionType.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: 'Marina',
                age: Math.floor(Math.random() * 40)
            }

            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case actionType.DELETE_PERSON:
            const tempPersonsArray = state.persons.filter(p => (
                p.id !== action.personToDeleteId
            ))
            return {
                ...state,
                persons: tempPersonsArray
            }
    }

    return state;
}

export default reducer;