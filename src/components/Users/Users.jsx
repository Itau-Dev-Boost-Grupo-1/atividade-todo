import React, {useState, useEffect} from 'react'
import UserTodos from '../UserTodos/UserTodos'

import { getUsers } from '../../services/todos';

import classes from  './style.module.css'

function Users(){

    const [users, setUsers] = useState([])
    useEffect(() => {

        (async () => {
            setUsers((await getUsers()).data)
        })()
    
      }, [])

    const [userId, setUserId] = useState("0")

    const handleChange = (e) => {
        const userId = e.target.value
        const userId_string = "" + userId
        setUserId(userId_string)
    }

    return (
        <>
        <div className="row justify-content-center">
            <div className="col-6 mt-3">
              <select className="form-control" defaultValue="0" onChange={(e) => handleChange(e)}>
                  <option value="0" disabled>Selecione um Id</option>
                  {users.map((user, index) => (
                      <option key={index} value={user.id}>Usuário: {user.id}</option>
                  )
                  )}
              </select>
            </div>
        </div>
        <div>
            <div className="card-deck col mt-5">
                <UserTodos userId={userId} />
            </div>
        </div>
        </>
    )
}

export default Users

