import './clock.css'
import React, { useState } from 'react';
import { Control } from './Control';
import { Display } from './Display';

export const Clock = () => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [countdown, setCountdown] = useState(sessionLength);

  const increaseBreakLength = e => setBreakLength(breakLength + 1);
  const decreaseBreakLength = e => setBreakLength(Math.max(0, breakLength - 1));
  const increaseSessionLength = e => setSessionLength(sessionLength + 1);
  const decreaseSessionLength = e => setSessionLength(Math.max(0, sessionLength - 1));


  return(
    <div id="clock" className="container">
      <h1>Study Clock</h1>
      <br /><br />
      <div className="row control-row">
        <Control
          className="col-6"
          name='Break'
          time={breakLength}
          increase={increaseBreakLength}
          decrease={decreaseBreakLength}
        />
        <Control
          className="col-6"
          name='Sesson'
          time={sessionLength}
          increase={increaseSessionLength}
          decrease={decreaseSessionLength}
        />
      </div>
      <br /><br />
      <Display
        sessionLength={sessionLength}
      />
    </div>
  )
}
