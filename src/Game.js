import React from 'react';
import GuessSection from './GuessSection';
import GuessHistory from './GuessHistory';
import Nav from './Nav';
import Header from './Header';

export default function Game (props) {

  return (
    <div className="container">
      <Nav />
      <Header />
      <GuessSection />

      <ul id="guessList" className="guessBox">
        <GuessHistory guesses="[1, 2, 3]"/>
      </ul>
    </div>
    
  )

}

