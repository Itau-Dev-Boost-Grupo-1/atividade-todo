import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import classes from './style.module.css'



function Todo(props) {
  const { data, setTodoStatus} = props

  function changeStatus(id, status) {
    setTodoStatus(id, status)
  }

  return (
    <div className={classes.cardContainer}>
      <div className={`card ${data.completed? 'todo-done' : 'todo-doing'}`} data-id={data.id}>
        <div className="card-body">
          <p className={classes.cardTitle}>{data.title}</p>
          {/* <input type="checkbox" id="status" name="status" /> */}

          <button className="btn btn-success" onClick={() => changeStatus(data.id, true)}>
            <span>DONE</span>
          </button>
          {" "}
          <button className="btn btn-warning" onClick={() => changeStatus(data.id, false)}>
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

