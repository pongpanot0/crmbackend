const organize = require('../controller/organize')
module.exports = function (app) {
    app.post('/organize/create',organize.createorganize)
    app.get('/organize/getall/:id',organize.getorganize)
    app.get('/organize/getallByorganize/:id',organize.getorganizeByorganize)
}