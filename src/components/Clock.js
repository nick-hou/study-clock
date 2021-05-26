import './clock.css'
import React, { useState } from 'react';
import { Control } from './Control';
import { Display } from './Display';

export const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const increaseBreakLength = breakLength => setBreakLength(breakLength+1);
  const decreaseBreakLength = breakLength => setBreakLength(breakLength-1);
  const increaseSessionLength = sessionLength => setSessionLength(sessionLength+1);
  const decreaseSessionLength = sessionLength => setSessionLength(sessionLength-1);

  return(
    <div id="clock">
      <h1>Study Clock</h1>
      <div className="row control-row">
        <Control
          className="col-6"
          time={breakLength}
          increase={increaseBreakLength}
          decrease={decreaseBreakLength}
        />
        <Control
          className="col-6"
          time={sessionLength}
          increase={increaseSessionLength}
          decrease={decreaseSessionLength}
        />
      </div>
      <Display
        time={sessionLength}
      />
    </div>
  )
}
