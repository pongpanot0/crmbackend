const db = require("../db/db");
const moment = require("moment");
exports.createproduct = async (req, res) => {
  let product_type = req.body.product_type;
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  let product_cost = req.body.product_cost;
  let company_id = req.body.company_id;
  let product_group = req.body.product_group;
  let product_amount = req.body.product_amount;
  let supplies_id = req.body.supplies_id;
  let created_by = req.body.created_by;
  let created_at =  moment(new Date()).format("YYYY-MM-DD HH:mm");
  let updated_by = req.body.updated_by;
  let updated_at =  moment(new Date()).format("YYYY-MM-DD HH:mm");
  const create = `insert into product (product_type,product_name,product_price,product_cost,company_id,product_group,product_amount,supplies_id,created_by,created_at,updated_by,updated_at) values('${product_type}','${product_name}','${product_price}','${product_cost}','${company_id}','${product_group}','${product_amount}','${supplies_id}','${created_by}','${created_at}','${updated_by}','${updated_at}')`;
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
exports.editproduct = async (req, res) => {
  const id = req.params.id;
  let product_type = req.body.product_type;
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  let product_cost = req.body.product_cost;
  let product_group = req.body.product_group;
  let product_amount = req.body.product_amount;
  let supplies_id = req.body.supplies_id;
  let updated_by = req.body.updated_by;
  let updated_at =  moment(new Date()).format("YYYY-MM-DD HH:mm");
  const create = `update  product  set product_type='${product_type}',product_name='${product_name}',product_price='${product_price}',product_cost='${product_cost}',product_group='${product_group}',product_amount='${product_amount}',supplies_id='${supplies_id}',updated_by='${updated_by}',updated_at='${updated_at}' where product_id = ${id}`;
  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.getproduct = async (req, res) => {
  let id = req.params.id;
  let create = `select * from product where company_id = ${id}`;
  let sum = `select SUM(product_amount) FROM product WHERE supplies_id = ${id};`;
  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      const data = result;
      db.query(sum, (err, result) => {
        res.send({
          sum: result[0]["SUM(product_amount)"],
          status: 200,
          data: data,
        });
      });
    }
  });
};
exports.getproductid = async (req, res) => {
  let id = req.params.id;
  let create = `select * from product where product_id = ${id}`;

  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send({
        data: result,
      });
    }
  });
};
exports.getproductbySupplier = async (req, res) => {
  let id = req.params.id;
  let create = `select * from  product where supplies_id = ${id}`;
  let sum = `select SUM(product_amount) FROM product WHERE supplies_id = ${id};`;
  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      const data = result;
      db.query(sum, (err, result) => {
        res.send({
          sum: result[0]["SUM(product_amount)"],
          status: 200,
          data: data,
        });
      });
    }
  });
};
