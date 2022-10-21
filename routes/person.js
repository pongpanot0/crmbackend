const person = require("../controller/person");
module.exports = function (app) {
  app.post("/person/create", person.createUser);
  app.get('/person/getall/:id',person.getall);
  app.get('/person/getuser/:id',person.getUser);
  app.post('/person/updateuser/:id',person.updateuser);
  app.get('/person/getUsercount/:id',person.getUsercount);
  app.post('/person/deleteuser/:id',person.deleteuser);

};
