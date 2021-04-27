import express from 'express'
const router = express.Router()

import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

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

//Create Login route
router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    //Authentication errors
    //server error
    if(err) return res.status(500).json({
      title: 'server error',
      error: err
    })

    //User not found
    if(!user) {
      return res.status(400).json({
        title: 'user is not found',
        error: 'invalid username or password'
      })
    }

    //Incorrect password
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid username or password'
      })
    }

    //Authentication has passed, give user a token
    let token = jwt.sign({userId: user._id}, 'secretkey')
    return res.status(200).json({
      title: 'login successful',
      token: token
    })
  })
})

//Get user information once they are logged in
router.get('/user', (req, res) => {
  let token = req.headers.token
  //verify token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if(err) return res.status(401).json({
      title: 'not authorized'
    })

    //Valid user, find their information in the database based on the token payload we assigned earlier
    User.findOne({_id: decoded.userId}, (err, user) => {
      if(err) return console.log(err)
      return res.status(200).json({
        title: 'success',
        user: {
          username: user.username
        }
      })
    })
  })
})

export default router
