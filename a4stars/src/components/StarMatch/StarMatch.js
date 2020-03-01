import React, { useState, useEffect } from 'react';
import './StarMatch.css';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import PlayAgain from '../PlayAgain/PlayAgain';
import utils from '../../util/util';

const StarMatch = props => {
  //state
  const [stars, setStars] = useState(utils.random(1, 9));
  const [avaialbleNumbers, setAvaialbleNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  //computations
  //const gameWon = avaialbleNumbers.length === 0;
  const candidateWrong = utils.sum(candidateNumbers) > stars;
  //const gameLost = secondsLeft === 0;
  const gameStatus = avaialbleNumbers.length === 0 
    ? 'won' 
    : secondsLeft === 0 ? 'lost' : 'active';


  //setTimmer
  useEffect(() => {
    if (secondsLeft > 0 && avaialbleNumbers.length > 0) {
    const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId)
    }
  });

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
    if (gameStatus !== 'active' || currentNumberStatus === 'used') {
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

  const startNewGameHandler = () => {
    setStars(utils.random(1, 9));
    setAvaialbleNumbers(utils.range(1, 9));
    setCandidateNumbers([]);
    setSecondsLeft(10);
  };


  const starsShow = gameStatus !== 'active' ? (
    <PlayAgain onClick={props.startNewGame}
    gameStatus ={gameStatus} />
  ) : (
    <StarsDisplay count={stars} />
  );

  //another aproach
  // const starsShow = gameStatus !== 'active' ? (
  //   <PlayAgain onClick={startNewGameHandler}
  //   gameStatus ={gameStatus} />
  // ) : (
  //   <StarsDisplay count={stars} />
  // );


  const gameComment = gameStatus === 'lost' ? (
    <p>You lost!</p> 
  ) : gameStatus === 'won' ? <p>You Won!</p>  : null

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
      <div className='timer'>Time Remaining: {secondsLeft} </div>
      {gameComment}
    </div>
  );
};

export default StarMatch;