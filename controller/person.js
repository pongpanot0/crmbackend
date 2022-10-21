const db = require("../db/db");
const moment = require("moment");
exports.createUser = async (req, res) => {
  let user_name = req.body.user_name;
  let user_firstname = req.body.user_firstname;
  let user_surname = req.body.user_surname;
  let created_by = req.body.created_by;
  let created_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let update_by = req.body.update_by;
  let update_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let organize_id = req.body.organize_id;
  let company_id = req.body.company_id;
  let role = req.body.role;
  let product = req.body.product;
  let customer = req.body.customer;
  let email = req.body.email;
  let count = `SELECT COUNT(user_name)  AS name2 FROM users WHERE user_name='${user_name}'`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result[0].name2 >= 1) {
      res.send({
        status: 400,
        message: "มีUsername นี่อยู่แล้ว",
      });
    }
    if (result[0].name2 == 0) {
      let create = `INSERT INTO users (user_name,user_firstname,user_surname,created_by,created_at,update_by,update_at,company_id,organize_id,role,product,customer,email)  VALUES ('${user_name}','${user_firstname}','${user_surname}','${created_by}','${created_at}','${update_by}','${update_at}','${company_id}','${organize_id}','${role}','${product}','${customer}','${email}')`;
      db.query(create, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          res.send({
            status: 200,
            data: result,
          });
        }
      });
    }
  });
};
exports.getall = async (req, res) => {
  let id = req.params.id;
  let count = `select * FROM users WHERE  inactive=0  AND company_id='${id}'`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.getUser = async (req, res) => {
  let id = req.params.id;

  let count = `select * FROM users WHERE user_id='${id}' `;

  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.deleteuser = async (req, res) => {
  let id = req.params.id;
  let count = `update users set  inactive=1 where user_id=${id}`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.getUsercount = async (req, res) => {
  let id = req.params.id;
  let count = `SELECT COUNT(*)  AS count FROM users WHERE inactive=0  AND company_id='${id}'`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.updateuser = async (req, res) => {
  let id = req.params.id;
  let user_firstname = req.body.user_firstname;
  let user_surname = req.body.user_surname;
  let update_by = req.body.update_by;
  let update_at = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let organize_id = req.body.organize_id;
  let role = req.body.role;
  let product = req.body.product;
  let customer = req.body.customer;
  let email = req.body.email;
  let count = `update users set  user_firstname='${user_firstname}',user_surname='${user_surname}',update_by='${update_by}',update_at='${update_at}',organize_id='${organize_id}',role='${role}',product='${product}',customer='${customer}',email='${email}'   WHERE user_id='${id}'`;
  db.query(count, async (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};

