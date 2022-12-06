import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import PostingsController from "./controllers/postings/postings-controller.js";
import UserController from "./controllers/users/user-controller.js";

const CONNECTION_STRING = 'mongodb+srv://cs4550:project@postings.u9fsees.mongodb.net/postings?retryWrites=true&w=majority'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())
PostingsController(app)
UserController(app)
app.listen(process.env.PORT || 4000)