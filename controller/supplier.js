const db = require("../db/db");

exports.createsupplier = async (req, res) => {
  let Supplier_Name = req.body.Supplier_Name;
  let Adress = req.body.Adress;
  let Email = req.body.Email;
  let Phone = req.body.Phone;
  let created_by = req.body.created_by;
  let created_at = req.body.created_at;
  let updated_by = req.body.updated_by;
  let updated_at = req.body.updated_at;
  let company_id = req.body.company_id;
  let create = `insert into supplier (Supplier_Name,Adress,Email,Phone,created_by,created_at,updated_by,updated_at,company_id) value('${Supplier_Name}','${Adress}','${Email}','${Phone}','${created_by}','${created_at}','${updated_by}','${updated_at}','${company_id}')`;
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
exports.getsupplier = async (req, res) => {
    let id = req.params.id
    let create = `select * from supplier where company_id = ${id}`;
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

