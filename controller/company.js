const db = require("../db/db");
const moment = require("moment");

exports.createcompany = async (req, res) => {
  const Company_name = req.body.Company_name;
  const company_location = req.body.company_location;
  const company_taxprayer = req.body.company_taxprayer;
  const company_tel = req.body.company_tel;
  const created_by = req.body.created_by;
  const created_at = req.body.created_at;
  const updated_by = req.body.updated_by;
  const updated_at = req.body.updated_at;
  const insert = `insert into company (Company_name,company_location,company_taxprayer,company_tel,created_by,created_at,updated_by,updated_at) value ('${Company_name}','${company_location}','${company_taxprayer}','${company_tel}','${created_by}','${created_at}','${updated_by}','${updated_at}')`;
  db.query(insert, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
    }
  });
};
exports.getdetailcompany = async (req, res) => {
  const company_id = req.params.company_id;
  const insert = `select * from company where Company_id = ${company_id}`;
  db.query(insert, (err, result) => {
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
exports.Editcompany = async (req, res) => {
  const id = req.params.id;
  const Company_name = req.body.Company_name;
  const company_location = req.body.company_location;
  const company_logo = req.body.company_logo;
  const company_taxprayer = req.body.company_taxprayer;
  const company_tel = req.body.company_tel;
  const updated_by = req.body.updated_by;
  const updated_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  const insert = `update company set company_logo='${company_logo}',Company_name='${Company_name}',company_location='${company_location}',company_taxprayer='${company_taxprayer}',company_tel='${company_tel}',updated_by='${updated_by}',updated_at='${updated_at}' where company_id =${id}`;
  db.query(insert, (err, result) => {
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
