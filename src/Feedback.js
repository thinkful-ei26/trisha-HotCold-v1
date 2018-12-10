import React from 'react';

export default function Feedback () {

  const gameFeedback = [
    { cold: 'cold',
      guessCorrect: true
    },
    { hot: 'hot',
      guessCorrect: false
    }

  ];

  const feedback = gameFeedback.map( (response, index) => (
  <div className="responses">
      <p className="cold">{response.cold}</p>
      <p className="hot">{response.hot}</p>
  </div>));

  return (
    <div className="Response">
      <p>{feedback}</p>
    </div>
    
  )

}
