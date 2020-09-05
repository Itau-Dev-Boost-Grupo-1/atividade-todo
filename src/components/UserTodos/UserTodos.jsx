import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

import Todo from './Todo'

import { getUserTodos } from '../../services/todos';

function UserTodos(props) {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   getUserTodos(props.userId).then(({data}) => {
  //     setTodos(data)
  //   })

  // }, [todos])


  console.log(todos)

  return (
    <div>
      <p>todos</p>
      <p>....</p>
    </div>
  )
}

UserTodos.propTypes = {
  userId: PropTypes.string
}

export default UserTodos


