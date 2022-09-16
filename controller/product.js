const db = require("../db/db");

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
  let created_at = req.body.created_at;
  let updated_by = req.body.updated_by;
  let updated_at = req.body.updated_at;
  console.log(req.body)
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
