import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

import Todo from './Todo'

import { getUserTodos } from '../../services/todos';

function UserTodos(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    (async () => {
      setTodos((await getUserTodos(props.userId)).data)
    })()

  }, [props.userId])

  return (
    <div>
      {
        todos.map((todo, i) => (<Todo key={i} data={todo} />))
      }      
    </div>
  )
}

UserTodos.propTypes = {
  userId: PropTypes.string
}

export default UserTodos


