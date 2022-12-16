import * as postingsDao from './postings-dao.js'

const createPosting = async (req, res) => {
    try {
        const newPosting = req.body
        const insertedPosting = await postingsDao.createPosting(newPosting);
        res.json(insertedPosting)
    } catch (err) {
        res.sendStatus(503)
    }
}

const findPostings  = async (req, res) => {
    try {
        const user = req.params.user
        const postings = await postingsDao.findPostings(user)
        res.json(postings)
    } catch (err) {
        res.sendStatus(503)
    }
}

const updatePosting = async (req, res) => {
    try {
        const postingIdToUpdate = req.params.pid;
        const updates = req.body;
        const status = await postingsDao.updatePosting(postingIdToUpdate, updates);
        res.json(status);
    } catch (err) {
        res.sendStatus(503)
    }
}

const deletePosting = async (req, res) => {
    try {
        const postingIdToDelete = req.params.pid
        const status = await postingsDao.deletePosting(postingIdToDelete);
        res.json(status)
    } catch (err) {
        res.sendStatus(503)
    }
}


export default (app) => {
    app.post('/api/postings', createPosting);
    app.get('/users/:user/postings', findPostings);
    app.put('/api/postings/:pid', updatePosting);
    app.delete('/api/postings/:pid', deletePosting);
}
