import React from 'react';
import './NumbersDisplay.css';
const NumbersDisplay = props => {
  return (
    <div>
      <button className='number' onClick={() =>(
        console.log('Num: ', props.num)
      )} > {props.num}</button>
    </div>
  );
};

export default NumbersDisplay;
