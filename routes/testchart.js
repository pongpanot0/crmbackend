const testchart = require("../controller/testchart");
module.exports = function (app) {
  app.get("/teest", testchart.chart);
};
