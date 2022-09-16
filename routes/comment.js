const comment = require('../controller/comment')


module.exports = function (app) {
    app.post('/comment/create',comment.createcomment)
    app.get('/comment/getcomment/:id',comment.getcomment)
}
    