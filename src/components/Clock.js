import './clock.css'
import React, { useState } from 'react';
import { Control } from './Control';
import { Display } from './Display';

export const Clock = () => {

  const [breakLength, setBreakLength] = useState(0.1);
  const [sessionLength, setSessionLength] = useState(0.1);
  // Store pause/activity state for CSS control, even though the state is set in the display component
  const [paused, setPaused] = useState(true);
  const [activity, setActivity] = useState('Study');
  // Similarly, store the countdown time here for arrow control
  const [countdownTime, setCountdownTime] = useState(60*sessionLength)

  const increaseBreakLength = e => setBreakLength(breakLength + 1);
  const decreaseBreakLength = e => setBreakLength(Math.max(0, breakLength - 1));
  // adjust session and countdown times independently because of setState's async nature
  const increaseSessionLength = e => {
    setSessionLength(sessionLength + 1)
    setCountdownTime(countdownTime + 60)
  }
  const decreaseSessionLength = e => {
    setSessionLength(Math.max(0, sessionLength - 1))
    setCountdownTime(Math.max(0, countdownTime - 60))
  }


  return(
    <div
      id="clock"
      className={
        // three class names: paused, study, and break
        "container clock-"
        + (paused
          ? 'paused'
          : (activity==='Study'
            ? 'study'
            : 'break'
          )
        )
      }
    >
      <h1>Study Clock</h1>
      <br /><br />
      <div className="row control-row">
        <Control
          className="col-sm-6 col-xs-12"
          name='Break'
          time={breakLength}
          increase={increaseBreakLength}
          decrease={decreaseBreakLength}
        />

        <Control
          className="col-sm-6 col-xs-12"
          name='Sesson'
          time={sessionLength}
          increase={increaseSessionLength}
          decrease={decreaseSessionLength}
        />
      </div>
      <br /><br />
      <Display
        paused={paused}
        setPaused={setPaused}
        activity={activity}
        setActivity={setActivity}
        sessionLength={sessionLength}
        breakLength={breakLength}
        countdownTime={countdownTime}
        setCountdownTime={setCountdownTime}
      />
    </div>
  )
}
