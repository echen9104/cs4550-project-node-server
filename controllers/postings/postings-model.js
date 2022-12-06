import mongoose from 'mongoose';
import postingsSchema from './postings-schema.js'
const postingsModel = mongoose
    .model('postingsModel', postingsSchema);
export default postingsModel;