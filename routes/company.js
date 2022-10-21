const company = require('../controller/company')


module.exports = function (app) {
    app.get('/company/getdetailcompany/:company_id',company.getdetailcompany)
    app.post('/company/editcompany/:id',company.Editcompany)

}
    
