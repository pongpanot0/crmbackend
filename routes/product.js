const product = require("../controller/product");
module.exports = function (app) {
  app.post("/product/create", product.createproduct);
  app.get("/product/getall/:id", product.getproduct);
};
