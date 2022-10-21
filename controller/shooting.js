const db = require("../db/db");
const moment = require("moment");
moment.locale("th");

exports.createShooting = async (req, res) => {
  let Shooting_name = req.body.Shooting_name;
  let Shooting_month = req.body.Shooting_month;
  let Shooting_amount = req.body.Shooting_amount;
  let company_id = req.body.company_id;
  let created_at =  moment(new Date()).format("YYYY-MM-DD");
  let created_by = req.body.created_by;
  let create = `insert into Shooting(Shooting_name,Shooting_month,Shooting_amount,company_id,created_at,created_by) value ('${Shooting_name}','${Shooting_month}','${Shooting_amount}','${company_id}','${created_at}','${created_by}') `;
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
exports.getShooting = async (req, res) => {
  const company_id = req.params.company_id;
  let create = `select * from Shooting where company_id = ${company_id}`;
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
