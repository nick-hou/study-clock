import React, { useState } from 'react';

export const Display = props => {
  const [activity, setActivity] = useState('Study');
  const [paused, setPaused] = useState(true);

  const play = e => {
    setPaused(false);
    // restart timer

  }

  const pause = e => {
    setPaused(true);
    // stop timer

  }

  const refresh = e => {
    // pause
    setPaused(true);
    // reset to study
    setActivity('Study');
    // reset countdown to sessionLength
    props.setCountdown(props.sessionLength)
  }


  return (
    <div id="display">
      <div className="countdownDisplay">
        <h3>{activity}</h3>
        <h1>{props.countdown}</h1>
      </div>
      <div className="row btnRow">
        <h3 onClick={props.play}><i className="fas fa-play"></i></h3>
        <h3 onClick={props.pause}><i className="fas fa-pause"></i></h3>
        <h3 onClick={props.refresh}><i className="fas fa-redo"></i></h3>
      </div>
    </div>
  )
}
