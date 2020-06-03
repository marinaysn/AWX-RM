import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterOutputT from '../../components/CounterOutput/CounterOutputT';

// import { increment, decrement, addCounter, subCounter, storeResult, deleteResult } from '../../store/actions/actions';

import { connect } from 'react-redux';
import './Counter.css'
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterOutputT value={this.props.tot} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />

                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr, this.props.storedResult)}> Store Results </button>
                <ul>

                    {this.props.storedResult.map(sR => (
                        
                        <li key={sR.id} onClick={() => this.props.onDeleteResult(sR.id, this.props.ctr, this.props.storedResult, this.props.tot)} className='Lst'> {sR.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        tot: state.tot.total,
        storedResult: state.res.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.addCounter(5)),
        onSubCounter: () => dispatch(actionCreators.subCounter(5)),

        // onStoreResult: (resultParam, totParam) => dispatch({ type: actionTypes.STORE_RESULT, result: resultParam, total: totParam }),

        onStoreResult: (resultParam, totParam) => dispatch(actionCreators.storeResult(resultParam, totParam)),

        // onDeleteResult: (id, resultParam, storedParamArray,totParam) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementID: id, result: resultParam, storedResult: storedParamArray, total: totParam })

        onDeleteResult: (id, resultParam, storedParamArray,totParam) => dispatch(actionCreators.deleteResult(id, resultParam, storedParamArray,totParam))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);