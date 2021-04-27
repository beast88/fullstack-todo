import express from 'express'
const router = express.Router()

import jwt from 'jsonwebtoken'

import Todo from '../models/todo.model.js'

//Get Todos
router.get('/', (req, res) => {
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if(err) return res.status(401).json({
      title: 'not authorized'
    })

    Todo.find({author: decoded.userId}, (err, todos) => {
      if(err) return console.log(err)

      return res.status(200).json({
        title: 'success',
        todos: todos
      })
    })
  })
})

//Create Todo
router.post('/', (req, res) => {
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if(err) return res.status(401).json({
      title: 'not authorized'
    })

    const author = decoded.userId
    const title = req.body.title
    const isCompleted = false

    const newTodo = new Todo({author, title, isCompleted})

    newTodo.save(error => {
      if(error) return console.log(error)
      return res.status(200).json({
        title: 'todo successfully added',
        todo: newTodo
      })
    })

  })
})

export default router
