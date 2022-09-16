const shooting = require("../controller/shooting");
module.exports = function (app) {
  app.post("/shooting/create", shooting.createShooting);
  app.get("/shooting/getall/:company_id", shooting.getShooting);
  
};
