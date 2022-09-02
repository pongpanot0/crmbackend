const customer = require('../controller/customer')
module.exports = function (app) {
    app.post('/customer/create',customer.createproduct)
    app.get('/customer/getall/:id',customer.getcustomers)
    app.get('/customer/getallbyorganize/:id',customer.getcustomersByOrganize)
}
    