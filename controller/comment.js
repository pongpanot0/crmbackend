const db = require("../db/db");
const moment = require('moment')

exports.createcomment = async (req, res) => {
  let order_id = req.body.order_id;
  let comment_detail = req.body.comment_detail;
  let created_by = req.body.created_by;
  let created_at = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
  let create = `insert into  comment (order_id,comment_detail,comment_created_at,created_by) values('${order_id}','${comment_detail}','${created_at}','${created_by}')`;
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
exports.getcomment = async (req, res) => {
  let id = req.params.id;

  let create = `select c.*,p.* from  comment c  left outer join users p ON (c.created_by=p.user_id) where c.order_id =${id} ORDER BY comment_created_at DESC`;
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
