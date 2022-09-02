const typeofproduct = require("../controller/typeofproduct");
module.exports = function (app) {
  app.post("/typeofproduct/create", typeofproduct.createtypeofproduct);
  app.get("/typeofproduct/getall/:id", typeofproduct.gettypeofproduct);
};
