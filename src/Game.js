import React from 'react';
import Guess from './Guess';
import GuessHistory from './GuessHistory'

export default function Game (props) {

  return (
    <div className="container">
      <header className="Game-header">
        <h1>Hot or Cold</h1>
      </header>
      <Guess />

      <ul id="guessList" className="guessBox">
        <GuessHistory guesses="[1, 2, 3]"/>
      </ul>
    </div>
    
  )

}

