const event = require('../controller/event')
module.exports = function (app) {
    app.post('/event/create',event.createevent)
    app.get('/event/getall/:id',event.getevent)
}
