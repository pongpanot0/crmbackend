const db = require("../db/db");


exports.createproduct = async (req, res) => {
  let customer_firstname = req.body.customer_firstname;
  let customer_lastname = req.body.customer_lastname;
  let customer_phone = req.body.customer_phone;
  let customer_sex = req.body.customer_sex;
  let customer_type = req.body.customer_type;
  let company_id = req.body.company_id
  let create = `insert into  customers (customer_firstname,customer_lastname,customer_phone,customer_sex,customer_type,company_id) values('${customer_firstname}','${customer_lastname}','${customer_phone}','${customer_sex}','${customer_type}','${company_id}')`;
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
};
exports.getcustomers = async (req, res) => {
    let id = req.params.id
    let create = `select * from customers where company_id = ${id}`;
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
  };
  exports.getcustomersByOrganize = async (req, res) => {
    let id = req.params.id
    let create = `select * from customers where organize_id = ${id}`;
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
  };