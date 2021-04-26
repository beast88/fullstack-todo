import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Set up server
const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());

//Database
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection has been established successfully!');
});

//Import routes
import userRoutes from './routes/users.js'

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
