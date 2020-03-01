import React, { useState } from 'react';
import './StarMatch.css';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import utils from '../../util/util';

const StarMatch = props => {
  //state
  const [stars, setStars] = useState(utils.random(1, 9));
  const [avaialbleNumbers, setAvaialbleNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);

  //computations
  const gameOver = avaialbleNumbers.length === 0;
  const candidateWrong = utils.sum(candidateNumbers) > stars;

  const numberStatusHandler = num => {
    if (!avaialbleNumbers.includes(num)) {
      return 'used';
    }
    if (candidateNumbers.includes(num)) {
      return candidateWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClickHandler = (numberClicked, currentNumberStatus) => {
    if (currentNumberStatus == 'used') {
      return;
    }

    const newCandidateNumber =
      currentNumberStatus === 'available'
        ? candidateNumbers.concat(numberClicked)
        : candidateNumbers.filter(cn => cn !== numberClicked);

    if (utils.sum(newCandidateNumber) !== stars) {
      setCandidateNumbers(newCandidateNumber);
    } else {
      const tempAvailNum = avaialbleNumbers.filter(
        n => !newCandidateNumber.includes(n)
      );
      setStars(utils.randomSumIn(tempAvailNum, 9));
      setAvaialbleNumbers(tempAvailNum);
      setCandidateNumbers([]);
    }
  };

  const starsShow = gameOver ? (
    <button>Start New Game</button>
  ) : (
    <StarsDisplay count={stars} />
  );

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {/* add stars */}

          {starsShow}
        </div>
        <div className='right'>
          {/* add numbers */}
          {utils.range(1, 9).map(num => (
            <NumbersDisplay
              num={num}
              key={num}
              status={numberStatusHandler(num)}
              onClick={onNumberClickHandler}
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
