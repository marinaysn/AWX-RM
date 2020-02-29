import React, { useState } from 'react';
import './StarMatch.css';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import utils from '../../util/util';
import colors from '../../util/colors';

const StarMatch = props => {

  const [stars, setStars] = useState(utils.random(3, 12));

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {/* add stars */}
          {utils.range(1, stars).map(starId => (
            < StarsDisplay key={starId}  />
          ))}
        </div>
        <div className='right'>
          {/* add numbers */}
          {utils.range(1, stars).map(num => (
            // <button key={num} className='number'>
            //   {num}
            // </button>
            <NumbersDisplay num={num} key={num} />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
