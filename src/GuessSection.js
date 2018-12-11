import React from 'react';

import GuessCount from './GuessCount'
import Feedback from './Feedback';

export default function GuessSection(props) {

  const guesses = [
    { userGuess: '9', history: "['23', '32', '50']" },
    { userGuess: '25', history: "['1', '5', '9']" }
  ];

  const guess = guesses.map( (guess, index) => (
  <div>
    <p>You guessed: {guess.userGuess} </p>
    <GuessCount guessCount="count" className="guessCount"/>
  </div>

  ));

  return (
  <section className="game">
			
    <Feedback response="Make a Guess!" />
    
    <form>
      <input type="text" name="userGuess" id="userGuess" className="text" placeholder="Enter your Guess" required/>
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>

    <div>
      {guess}
    </div>

  </section>
  )

}
