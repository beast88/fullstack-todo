import express from 'express'
const router = express.Router()

import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

//Create user route
router.post('/signup', (req, res) => {
  //Get the data from the request body
  const username = req.body.username
  const password = bcrypt.hashSync(req.body.password, 10)

  //Create the new user
  const newUser = new User({username, password})

  //Save the new user
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

export default router
