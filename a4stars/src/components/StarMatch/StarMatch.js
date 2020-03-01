import React from 'react';
import './StarMatch.css';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import PlayAgain from '../PlayAgain/PlayAgain';
import utils from '../../util/util';
import useGameState from '../../containers/useGameState/useGameState';

const StarMatch = props => {
  //state
  const { 
    stars,
    avaialbleNumbers, 
    candidateNumbers, 
    secondsLeft, 
    setGameState
  } = useGameState()

  const candidateWrong = utils.sum(candidateNumbers) > stars;
  const gameStatus = avaialbleNumbers.length === 0 
    ? 'won' 
    : secondsLeft === 0 ? 'lost' : 'active';

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

        setGameState(newCandidateNumber);
  };

  const starsShow = gameStatus !== 'active' ? (
    <PlayAgain onClick={props.startNewGame}
    gameStatus ={gameStatus} />
  ) : (
    <StarsDisplay count={stars} />
  );

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