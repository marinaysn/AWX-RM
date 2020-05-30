import React from 'react';

import './CounterOutput.css';

const counterOutputT = (props) => (
    <div className="CounterOutput">
        Total in the List: {props.value}
    </div>
);

export default counterOutputT;