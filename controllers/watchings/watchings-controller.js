import * as watchingsDao from "./watchings-dao.js";

const WatchingsController = (app) => {
    const userWatchesPosting = async (req, res) => {
        const pid = req.session['currentUser']._id
        const mid = req.params.mid
        const newWatching = await watchingsDao.userWatchesPosting(uid, pid)
        res.json(newWatching)
    }

    const userUnwatchesPosing = async (req, res) => {
        const {uid, pid} = req.params
        const status = await watchingsDao.userUnwatchesPosing(uid, pid)
        res.send(status)
    }

    const findAllWatchings = async (req, res) => {
        const watchings = await watchingsDao.findAllWatchings()
        res.json(watchings)
    }

    const findPostingsWatchedByUser = async (req, res) => {
        const uid = req.params.uid
        const watchings = await watchingsDao.findPostingsWatchedByUser(uid)
        res.json(watchings)
    }

    app.post('/users/watches/:pid', userWatchesPosting)
    app.delete('/users/unwatches/:pid', userUnwatchesPosing)
    app.get('/watchings', findAllWatchings)
    app.get('/users/:uid/watchings', findPostingsWatchedByUser)
}

export default WatchingsController;