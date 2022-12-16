import * as postingsDao from './postings-dao.js'

const createPosting = async (req, res) => {
    try {
        const post = req.body
        const currentUser = req.session['currentUser']
        post.user = currentUser._id
        const actualPost = await postingsDao.createPosting(post)
        res.json(actualPost)
    } catch (err) {
        res.sendStatus(503)
    }
}

const findPostingsByUser  = async (req, res) => {
    try {
        const user = req.params.user
        const postings = await postingsDao.findPostingsByUser(user)
        res.json(postings)
    } catch (err) {
        res.sendStatus(503)
    }
}

const findPostingsBySku  = async (req, res) => {
    try {
        const sku = req.params.skuID
        const postings = await postingsDao.findPostingsBySku(sku)
        res.json(postings)
    } catch (err) {
        res.sendStatus(503)
    }
}

const deletePosting = async (req, res) => {
    const pid = req.params.pid
    const status = await postingsDao.deletePosting(pid)
    res.send(status)
}

export default (app) => {
    app.get('/users/:user/postings', findPostingsByUser);
    app.get('/postings/:skuID', findPostingsBySku);
    app.post('/postings', createPosting);
    app.delete('/postings/:pid', deletePosting);
}
