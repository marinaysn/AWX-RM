import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterOutputT from '../../components/CounterOutput/CounterOutputT';
import { connect } from 'react-redux';


class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterOutputT value={this.props.ctrT} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />

                <hr />
                <button onClick={this.props.onStoreResult}> Store Result: </button>
                <ul>

                    {this.props.storedResult.map(sR => (
                        <li key={sR.id} onClick={() => this.props.onDeleteResult(sR.id)}> {sR.value}</li>
                    ))}

                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        ctrT: state.total,
        storedResult: state.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }),
        onDecrementCounter: () => dispatch({
            type: 'DECREMENT'
        }),
        onAddCounter: () => dispatch({
            type: 'ADD_COUNTER', value: 5
        }),
        onSubCounter: () => dispatch({
            type: 'SUB_COUNTER', value: 5
        }),

        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),

        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElementID: id })


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);