import postingsModel from './postings-model.js';
export const findPostings = (user) => postingsModel.find({user});
export const createPosting = (posting) => postingsModel.create(posting);
export const deletePosting = (pid) => postingsModel.deleteOne({_id: pid});
export const updatePosting = (pid, posting) => postingsModel.updateOne({_id: pid}, {$set: posting})