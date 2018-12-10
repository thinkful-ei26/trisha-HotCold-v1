import React from 'react';
import Guess from './Guess';
import Feedback from './Feedback';
import GuessHistory from './GuessHistory';

export default function Game () {

  return (
    <div className="Header">
      <header className="Game-header">
        <h1>Hot or Cold</h1>
      </header>

      <section className="game">
			
      < Feedback />

      <form>
        <input type="text" name="userGuess" id="userGuess" className="text" placeholder="Enter your Guess" required/>
        
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form>

      <GuessHistory />
      
      <ul id="guessList" className="guessBox">
        <Guess />
      </ul>

    </section>
    </div>
    
  )

}
