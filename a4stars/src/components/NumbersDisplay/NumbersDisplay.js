import React from 'react';
import './NumbersDisplay.css';
import colors from '../../util/colors';

const NumbersDisplay = props => {
  return (
    <div>
      <button 
        className='number' 
        style={{background: colors[props.status] }}
        onClick={() =>(
          console.log('Num: ', props.num)
        )} > {props.num}</button>
    </div>
  );
};

export default NumbersDisplay;
