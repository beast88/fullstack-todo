# Full Stack CRUD To Do List (MERN)

## Project Overview

### Description

This a simple full stack CRUD to do list app built using the MERN stack.

### Features

- Users can create a profile for themselves
- Their individual to do lists will be displayed
- Users can create, updated and destroy their own to do items
- Light form validations to ensure when creating a profile passwords are the same
- Authentication wall and protected routes to ensure that only logged in users with a valid webtoken have access to the dashboard component

## Development

### Technologies

The following technologies were used to create this app:

- MongoDB
- Express JS
- React JS
- Node JS

### Dependencies

The following depencies were used:

#### Frontend

- React Router Dom
- Bootstrap
- Bootstrap Icons
- Axios

#### Backend

- mongoose

- nodemon

Allows live refreshing of server when changes have been made to files

- bcrypt

This hashes the users password. Provides better security when communicating with the database.

- jsonwebtoken

Generates a web token that can be stored in the user local storage once they have successfully logged in. This is required to allow users to access their dashboard. The token is also used to validate the user when trying to create, read, update or destroy their own to do items.
