import React, { useState, useEffect } from 'react';
import utils from '../../util/util';

const useGameState = (props) => {

  const [stars, setStars] = useState(utils.random(1, 9));
  const [avaialbleNumbers, setAvaialbleNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);


  useEffect(() => {
    if (secondsLeft > 0 && avaialbleNumbers.length > 0) {
    const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId)
    }
  });

  const setGameState = (newCandidateNumber) => {

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
  }

  return {stars, avaialbleNumbers, candidateNumbers, secondsLeft, setGameState}
}

export default useGameState
