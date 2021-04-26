import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {required: true, unique: true, trim: true, minlength: 4},
    password: {required: true},
},  {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User