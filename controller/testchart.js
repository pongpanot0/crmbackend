const db = require("../db/db");
const moment = require("moment");
exports.chart = async (req, res) => {
  let count = `select o.*,u.* from orders o  
  left outer join organize u ON (o.organize_id=u.organize_id)
  where o.company_id = 1`;
  db.query(count, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    if (result) {
      (hash = result.reduce(
        (p, c) => (
          p[c.organize_name]
            ? p[c.organize_name].push(c)
            : (p[c.organize_name] = [c]),
          p
        ),
        {}
      )),
        (newData = Object.keys(hash).map(
          (k) => (
            console.log(k),
            {
              Depcode: k,
              Detail: hash[k],
            }
          )
        ));
      res.send({
        count: result.length,
        data: newData,
      });
    }
  });
};
