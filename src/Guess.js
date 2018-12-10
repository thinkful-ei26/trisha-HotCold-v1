import React from 'react';

export default function Guess () {

  const guesses = [
    { current: '9', history:'1' },
    { current: '25', history:'2' },
    { current: '30', history:'3' }
  ];

  const guess = guesses.map( (guess, index) => (
  <div>
    <p>{guesses.length}</p>
    <li key={index}>
      <p>You guessed: {guess.current} for guess#{guess.history}</p>
    </li>
  </div>

  ));

  return (<div>
    <ul id="guessList" className="guessBox">
        <p>{guess} </p>
    </ul>
  </div>
  )

}
