import PropTypes from 'prop-types'
import React, { useState } from 'react'

import classes from './style.module.css'



function Todo(props) {
  const { data } = props
  const [completed, setCompleted] =  useState(data.completed)

  return (
    <div className={classes.cardContainer}>
      <div className={`card ${completed? 'border-success' : 'border-warning'}`}>
        <div className="card-body">
          <p className={classes.cardTitle}>{data.title}</p>
          <button className="btn btn-outline-success" onClick={() => setCompleted(true)}>
            <span>done</span>
          </button>
          {" "}
          <button className="btn btn-outline-warning" onClick={() => setCompleted(false)}>
            <span>doing</span>
          </button>
        </div>
    </div>
    </div>
  )
}

Todo.propTypes = {
  data: PropTypes.object.isRequired
}

export default Todo

