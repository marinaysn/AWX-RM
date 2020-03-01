import React from 'react'
import './PlayAgain.css';

const PlayAgain = (props) => {
  return (
    <div className="newGame">
      <p className="redText">GAME OVER!</p>
      <button onClick={props.onClick}>Play New Game?</button>
    </div>
  )
}

export default PlayAgain
