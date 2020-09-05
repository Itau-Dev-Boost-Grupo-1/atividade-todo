import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

import Todo from './Todo'

import { getUserTodos } from '../../services/todos';

function UserTodos(props) {
  const [todos, setTodos] = useState([]);
  const [finish, setFinish] = useState(false);

  useEffect(() => {

    (async () => {
      setTodos((await getUserTodos(props.userId)).data)
    })()

  }, [props.userId])

  useEffect(()=> {
    if (finish) {
      let doing = []
      
      for (const todo of todos) {
        if (!todo.completed) {
          console.log(todo.completed === false, todo.id)
          doing.push(todo)
        }
      }

      setTodos(doing)
    }

    return () => setFinish(false)
  }, [finish])

  console.log(todos)
  return (
    <div>
      <div className="row">
        <div className="col mb-3">
          <button className="btn btn-primary" onClick={() => setFinish(true)}>Concluir tarefas</button>
        </div>
      </div>
      <div className="row">

        {
         todos.map((todo, i) => (<Todo key={i} data={todo} setTodoStatus={(status) => { todo.completed = status }} />))
        }

      </div>

    </div>
  )
}

UserTodos.propTypes = {
  userId: PropTypes.string
}

export default UserTodos


