const swaggerAutogen = require("swagger-autogen")();
var fs = require("fs");
const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:7300",
  schemes: ["http"],
};
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const outputFile = "./swagger_output.json";

fs.readdirSync("routes").forEach(function (file) {
  if (file[0] == ".") return;

  const endpointsFiles = [
    "./routes/" + "auth.js",
    "./routes/" + "customer.js",
    "./routes/" + "event.js",
    "./routes/" + "organize.js",
    "./routes/" + "product.js",
    "./routes/" + "supplier.js",
    "./routes/" + "typeofproduct.js",
    "./routes/" + "comment.js",
  ];

  swaggerAutogen(outputFile, endpointsFiles, doc);
});
