import React, { useState } from 'react';
import './StarMatch.css';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import utils from '../../util/util';
import colors from '../../util/colors';

const StarMatch = props => {

  //const numRandom = utils.random(3, 12);
  //state
  const [stars, setStars] = useState(utils.random(3, 12));
  const [avaialbleNumbers, setAvaialbleNumbers] = useState(utils.range(1, stars));
  const [candidateNumbers, setCandidateNumbers] = useState([]);

  const candidateWrong = utils.sum(candidateNumbers) > stars;

  const numberStatusHandler = (num) => {
    if(!avaialbleNumbers.includes(num)){
      return 'used';
    }
    if(candidateNumbers.includes(num)){
      return candidateWrong ? 'wrong': 'candidate';
    }
    return 'available';
  }


  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {/* add stars */}
          {utils.range(1, stars).map(starId => (
            <StarsDisplay key={starId} />
          ))}
        </div>
        <div className='right'>
          {/* add numbers */}
          {utils.range(1, stars).map(num => (
            <NumbersDisplay 
              num={num} 
              key={num} 
              status={numberStatusHandler(num)}
            />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;

// const colors = {
//   available: 'lightgray',
//   used: 'lightgreen',
//   wrong: 'lightcoral',
//   candidate: 'deepskyblue'
// };

// // Math science
// const utils = {
//   // Sum an array
//   sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

//   // create an array of numbers between min and max (edges included)
//   range: (min, max) =>
//     Array.from({ length: max - min + 1 }, (_, i) => min + i),

//   // pick a random number between min and max (edges included)
//   random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

//   // Given an array of numbers and a max...
//   // Pick a random sum (< max) from the set of all available sums in arr
//   randomSumIn: (arr, max) => {
//     const sets = [[]];
//     const sums = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0, len = sets.length; j < len; j++) {
//         const candidateSet = sets[j].concat(arr[i]);
//         const candidateSum = utils.sum(candidateSet);
//         if (candidateSum <= max) {
//           sets.push(candidateSet);
//           sums.push(candidateSum);
//         }
//       }
//     }
//     return sums[utils.random(0, sums.length - 1)];
//   }
// };
