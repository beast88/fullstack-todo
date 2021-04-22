import mongoose from 'mongoose'

const Schema = mongoose.Schema()

const todoSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo