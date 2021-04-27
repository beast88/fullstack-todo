import React, { useState, useEffect } from 'react'
import Navbar from '../components/global/Navbar'
import TodoForm from '../components/todos/TodoForm'
import axios from 'axios'

const Dashboard = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('/users/user',
    {headers: 
      {token: localStorage.getItem('token')}
    })
      .then(res => setUsername(res.data.user.username))
  }, [])

  return(
    <div className="" >
      <Navbar />
      <div className="p-3 d-flex flex-column align-items-center">
        <p className="mb-0">Welcome <span className="text-primary font-weight-bolder">{username}</span>, here is your to do list</p>
        <TodoForm />
      </div>
    </div>
  )
}

export default Dashboard