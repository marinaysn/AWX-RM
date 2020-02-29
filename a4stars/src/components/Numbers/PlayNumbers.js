import React from 'react';
import './PlayNumbers.css';
const PlayNumbers = props => {
  return (
    <div>
      <button className='number' onClick={() =>(
        console.log('Num: ', props.num)
      )} > {props.num}</button>
    </div>
  );
};

export default PlayNumbers;
