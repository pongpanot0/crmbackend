const db = require("../db/db");

exports.createtypeofproduct = async (req, res) => {
  let type_name = req.body.type_name;
  let created_by = req.body.created_by;
  let created_at = req.body.created_at;
  let updated_by = req.body.updated_by;
  let updated_at = req.body.updated_at;
  let company_id = req.body.company_id;
  let create = `insert into typeproduct (type_name,created_by,created_at,updated_by,updated_at,company_id) value('${type_name}','${created_by}','${created_at}','${updated_by}','${updated_at}','${company_id}')`;
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

exports.gettypeofproduct = async (req, res) => {
  let id = req.params.id;
  let create = `select * from typeproduct where company_id = ${id}`;
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
