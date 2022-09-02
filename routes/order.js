const order = require("../controller/order");
module.exports = function (app) {
  app.post("/order/create", order.creatOrder);
  app.get("/order/getall/:id", order.getorder);
  app.put("/order/update/:id", order.updateOrder);
  app.get("/order/getDetail/:id", order.getDetail);
  app.get("/order/getDetailtimeline/:id", order.getDetailtimeline);
};
