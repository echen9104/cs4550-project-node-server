import express from 'express';
import cors from 'cors';
import session from 'express-session';
import mongoose from "mongoose";
import SessionController from "./session-controller.js";
import PostingsController from "./controllers/postings/postings-controller.js";
import UserController from "./controllers/users/users-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

const CONNECTION_STRING = 'mongodb+srv://cs4550:project@postings.u9fsees.mongodb.net/?retryWrites=true&w=majority'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING,options);

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
// app.use(cors)
app.use(express.json())

SessionController(app)
PostingsController(app)
UserController(app)
app.listen(4000)