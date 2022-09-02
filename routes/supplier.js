const supplier = require("../controller/supplier");
module.exports = function (app) {
  app.post("/supplier/create", supplier.createsupplier);
  app.get("/supplier/getall/:id", supplier.getsupplier);
};
