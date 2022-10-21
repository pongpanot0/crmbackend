const db = require("../db/db");

exports.createproduct = async (req, res) => {
  let customer_firstname = req.body.customer_firstname;
  let customer_lastname = req.body.customer_lastname;
  let customer_phone = req.body.customer_phone;
  let customer_type = req.body.customer_type;
  let company_id = req.body.company_id;
  let customer_taxprayer = req.body.customer_taxprayer;
  let customer_location = req.body.customer_location;
  let create = `insert into  customers (customer_location,customer_taxprayer,customer_firstname,customer_lastname,customer_phone,customer_type,company_id) values('${customer_location}','${customer_taxprayer}','${customer_firstname}','${customer_lastname}','${customer_phone}','${customer_type}',${company_id})`;
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
  let id = req.params.id;
  let count = `  select count(customer_type) as customer_type1 from customers where company_id = ${id} and customer_type='1';`;
  let count2 = `  select count(customer_type) as customer_type2 from customers where company_id = ${id} and customer_type='2';`;
  let create = `select * from customers where company_id = ${id}`;
  db.query(count, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      const count = result;
      db.query(count2, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          const count2 = result;
          db.query(create, (err, result) => {
            if (err) {
              console.log(err);
            }
            if (result) {
              res.send({
                status: 200,
                count: { count, count2 },
                data: result,
              });
            }
          });
        }
      });
    }
  });
};
exports.getcustomersByOrganize = async (req, res) => {
  let id = req.params.id;
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
