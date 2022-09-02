const db = require("../db/db");
const moment = require("moment");
moment.locale("th");

exports.creatOrder = async (req, res) => {
  let order_name = req.body.order_name;
  let order_detail = req.body.order_detail;
  let company_id = 1;
  let organize_id = 1;
  let order_timeline = 1;
  let created_by = 1;
  let created_at = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let updated_by = 1;
  let updated_at = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let create = `insert into orders(order_name,order_detail,company_id,organize_id,order_timeline,created_by,created_at,updated_by,updated_at) value ('${order_name}','${order_detail}','${company_id}','${organize_id}','${order_timeline}','${created_by}','${created_at}','${updated_by}','${updated_at}')`;
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
exports.getorder = async (req, res) => {
  let id = req.params.id;
  let create = `select * from orders where company_id = ${id}`;
  let count1 = `select  count(*) as count1 from orders where company_id = ${id} and order_timeline=1`;
  let count2 = `select  count(*) as count2 from orders where company_id = ${id} and order_timeline=2`;
  let count3 = `select  count(*) as count3 from orders where company_id = ${id} and order_timeline=3`;
  let count4 = `select  count(*) as count4 from orders where company_id = ${id} and order_timeline=4`;
  db.query(count1, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      let count1 = result[0].count1;
      db.query(count2, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          let count2 = result[0].count2;
          db.query(count3, (err, result) => {
            if (err) {
              console.log(err);
            }
            if (result) {
              let count3 = result[0].count3;
              db.query(count4, (err, result) => {
                if (err) {
                  console.log(err);
                }
                if (result) {
                  let count4 = result[0].count4;
                  db.query(create, (err, result) => {
                    if (err) {
                      console.log(err);
                    }
                    if (result) {
                      res.send({
                        status: 200,
                        count: result.length,
                        count1: count1,
                        count2: count2,
                        count3: count3,
                        count4: count4,
                        data: result,
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  let company_id = 1;
  let organize_id = 1;
  let order_timeline = req.body.order_timeline;
  let created_at = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let updated_by = 1;
  let timeline = req.body.timeline;
  let orderphase2_detail = req.body.orderphase2_detail;
  let orderphase2_pic = req.body.orderphase2_pic;
  let order_id = req.body.order_id;
  let updated_at = moment(new Date()).format("DD/MM/YYYY HH:mm");
  let create = `update orders set order_timeline=${timeline},updated_at='${updated_at}',updated_by=${updated_by} where order_id =${id}  `;
  let phase2 = `insert into orderphase2 (organize_id,company_id,created_by2,created_at2,order_id,orderphase2_pic,orderphase2_detail) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}')`;
  let phase3 = `insert into orderphase3 (organize_id,company_id,created_by3,created_at3,order_id,orderphase3_pic,orderphase3_detail) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}')`;
  let phase4 = `insert into orderphase4 (organize_id,company_id,created_by4,created_at4,order_id,orderphase4_pic,orderphase4_detail) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}')`;
  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (order_timeline === 1) {
      db.query(phase2, (err, result) => {
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
    if (order_timeline === 2) {
      db.query(phase3, (err, result) => {
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
    if (order_timeline === 3) {
      db.query(phase4, (err, result) => {
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

exports.getDetailtimeline = async (req, res) => {
  const id = req.params.id;
  let create = `select o.*,o2.*,o3.*,o4.*  from orders o
  left outer join orderphase2 o2 ON (o.order_id=o2.order_id)
  left outer join orderphase3 o3 ON (o.order_id=o3.order_id)
  left outer join orderphase4 o4 ON (o.order_id=o4.order_id)
where o.order_id =${id}
`;
  db.query(create, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result) {
      res.send({
        status: 200,
        data: result,
      });
    }
  });
};
exports.getDetail = async (req, res) => {
  const id = req.params.id;
  let create = `select * from orders where order_id =${id}`;
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
