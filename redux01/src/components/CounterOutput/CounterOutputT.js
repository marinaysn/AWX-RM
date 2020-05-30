import React from 'react';

import './CounterOutput.css';

const counterOutputT = (props) => (
    <div className="CounterOutput">
        Current Totals: {props.value}
    </div>
);

export default counterOutputT;