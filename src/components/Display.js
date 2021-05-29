import React from 'react';

export const Display = props => {

  const play = e => {
    if(props.paused) {
      props.setPaused(false);
      // restart timer
      startClock(props.countdownTime, props.activity)
    }
  }

  const pause = e => {
    props.setPaused(true);
    // stop timer
    clearInterval(window.clockRefresh)
  }

  const refresh = e => {
    // pause
    props.setPaused(true);
    clearInterval(window.clockRefresh)
    // reset to study
    props.setActivity('Study');
    // reset countdown to sessionLength
    props.setCountdownTime(60*props.sessionLength)
  }

  function updateClock(destination, activity) {
    const remainder = Math.round(destination - (new Date().getTime())/1000)
    props.setCountdownTime(remainder)
    if(remainder <= 0) {
      clearInterval(window.clockRefresh)
      switchClock(activity)
    }
  }

  function startClock(time, activity) {
    const now = (new Date().getTime())/1000; // current time in seconds
    const destination = now + time
    window.clockRefresh = setInterval(() => updateClock(destination, activity), 1000)
  }


  const switchClock = activity => {
    console.log(activity)
    if(activity === 'Study') {
      props.setActivity('Break')
      props.setCountdownTime(60*props.breakLength)
      startClock(60*props.breakLength, 'Break')
    }
    else if(activity === 'Break') { // activity == 'break'
      // clearInterval(window.clockRefresh)
      props.setActivity('Study')
      props.setCountdownTime(60*props.sessionLength)
      startClock(60*props.sessionLength, 'Study')
    }
  }

  return (
    <div id="display">
      <div className="countdownDisplay">
        <h3>{props.activity}</h3>
        <h1>
          {Math.floor(props.countdownTime/60)}
          :
          {
            ( // if less than 10 seconds, append a 0 to the front
              (props.countdownTime%60 < 10)
              ? '0'
              : ''
            )
            +
            // Remove negative sign when timer hits 0. Beacause of compute time the actual countdown time will be a very small negative number when it should be 0
            Math.abs(Math.round(props.countdownTime%60))
          }
        </h1>
      </div>
      <div className="row btnRow">
        <h3 onClick={play}><i className="fas fa-play"></i></h3>
        <h3 onClick={pause}><i className="fas fa-pause"></i></h3>
        <h3 onClick={refresh}><i className="fas fa-redo"></i></h3>
      </div>
    </div>
  )
}
