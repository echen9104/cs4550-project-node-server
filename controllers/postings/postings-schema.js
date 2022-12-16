import mongoose from 'mongoose';
import UsersModel from "../users/users-model.js";

const schema = mongoose.Schema({
    name: String,
    image: String,
    asking: Number,
    skuID: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel
    }
}, {collection: 'postings'});
export default schema;