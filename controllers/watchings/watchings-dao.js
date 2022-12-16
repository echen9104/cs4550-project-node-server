import watchingsModel from "./watchings-model.js";

export const userWatchesPosting = async (uid, pid) => {
    return await watchingsModel.create({user: uid, posting: pid})
}

export const userUnwatchesPosing = async(uid, pid) => {
    await watchingsModel.deleteOne({user: uid, posting: pid})
}

export const findWatchingsLikedByUser = async(uid) => {
    return await watchingsModel
        .find({user: uid}, {user: false})
        .populate('posting', 'name')
        .exec()
}

export const findAllWatchings = async () =>
    await watchingsModel.find()