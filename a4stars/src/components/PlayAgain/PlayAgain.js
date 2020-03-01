import React from 'react'
import './PlayAgain.css';

const PlayAgain = (props) => {

  const status = props.gameStatus === 'lost' ? (
    <p className='redText'> Sorry, Game is Over!</p>
    ) : (<p className='greenText'> Congrats! You Won!</p>)
  return (
    <div className="newGame">
      {status}
      <button onClick={props.onClick}>Play New Game?</button>
    </div>
  )
}

export default PlayAgain
