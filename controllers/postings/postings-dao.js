import postingsModel from './postings-model.js';
export const findPostingsByUser = (user) => postingsModel.find({user});
export const findPostingsBySku = (sku) => postingsModel.find({sku});
export const createPosting = (posting) => postingsModel.create(posting);
export const deletePosting = (pid) => postingsModel.deleteOne({_id:pid});