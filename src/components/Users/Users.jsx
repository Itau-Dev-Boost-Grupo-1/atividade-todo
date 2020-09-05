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
        <div className="container">
            <h1 className={classes.title}>Lista de todos</h1>
            <select className={classes.select__user} onChange={(e) => handleChange(e)}>
                <option value selected disabled>Selecione um Id</option>
                {users.map((user, index) => (
                    <option key={index} value={user.id}>Usuário: {user.id}</option>
                )
                )}
            </select>
            <div className='card-deck'>
                <UserTodos userId={userId} />
            </div>
        </div>
    )
}

export default Users

