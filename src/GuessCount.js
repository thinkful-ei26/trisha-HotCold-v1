import React from 'react';

export default function GuessCount(props){

  return(
    <div>
      <p>Guess#<span className="currentGuessCount">{props.guessCount}</span></p>
    </div>
  ); 
}