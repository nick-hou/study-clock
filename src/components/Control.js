import React from 'react'

export const Control = props => {
  return (
    <div className={props.className}>
      <h2>{props.name} Length</h2>
      <div className="row btnRow">
        <h3
          onClick={props.decrease}
        >
        <i className="fas fa-arrow-down"></i>
        </h3>

        <h3
          className="timeLength"
        >
        {props.time}
        </h3>

        <h3
          onClick={props.increase}
        >
        <i className="fas fa-arrow-up"></i>
        </h3>
      </div>
    </div>
  )
}
