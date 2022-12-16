import mongoose from "mongoose";

const watchingsSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    posting: {type: mongoose.Schema.Types.ObjectId, ref: 'postingsModel'},
}, {collection: 'likes'})

export default watchingsSchema