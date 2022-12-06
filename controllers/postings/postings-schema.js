import mongoose from 'mongoose';
const schema = mongoose.Schema({
    posting: String,
    shoe: String,
    price: Number,
    condition: String,
}, {collection: 'postings'});
export default schema;