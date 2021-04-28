import React, { useState, useEffect } from 'react'
import Navbar from '../components/global/Navbar'
import TodoForm from '../components/todos/TodoForm'
import TodoItem from '../components/todos/TodoItem'
import axios from 'axios'

const Dashboard = (props) => {
  const [username, setUsername] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('/users/user',
    {headers: 
      {token: localStorage.getItem('token')}
    })
      .then(res => setUsername(res.data.user.username))
  }, [])

  useEffect(() => {
    axios.get('/todo',
    {headers:
      {token: localStorage.getItem('token')}
    })
      .then(res => setTodos(res.data.todos))
  }, [])

  const addTodo = (newItem) => {
    setTodos(prevState => [...prevState, newItem])
  }

  return(
    <div className="" >
      <Navbar />
      <div className="p-3 d-flex flex-column align-items-center">
        <p className="mb-0">Welcome <span className="text-primary font-weight-bolder">{username}</span>, here is your to do list</p>
        <TodoForm addTodo={addTodo} />

        { todos.map((todo) => {
          return <TodoItem todo={todo} key={todo._id} />
        }) }

      </div>
    </div>
  )
}

export default Dashboard