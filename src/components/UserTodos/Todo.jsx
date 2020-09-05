import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import classes from './style.module.css'



function Todo(props) {
  const { data, setTodoStatus} = props
  const [completed, setCompleted] =  useState(data.completed)

  // useEffect(() => {

  //   setTodoStatus(data.id, completed)
  // }, [completed, data.id, setTodoStatus])

  return (
    <div className={classes.cardContainer}>
      <div className={`card ${completed? 'border-success bg-success' : 'border-warning bg-warning'}`} data-id={data.id}>
        <div className="card-body">
          <p className={classes.cardTitle}>{data.title}</p>
          {/* <input type="checkbox" id="status" name="status" /> */}
          
          <button className="btn btn-success" onClick={() => setCompleted(true)}>
            <span>DONE</span>
          </button>
          {" "}
          <button className="btn btn-warning" onClick={() => setCompleted(false)}>
            <span>DOING</span>
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

