const db = require("../db/db");

exports.createevent = async (req, res) => {
  let Event_name = req.body.Event_name;
  let Location = req.body.Location;
  let Startdate = req.body.Startdate;
  let Enddate = req.body.Enddate;
  let company_id = req.body.company_id
  let create = `insert into event (Event_name,Location,Startdate,Enddate,company_id) value ('${Event_name}','${Location}','${Startdate}','${Enddate}','${company_id}')`;
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
exports.getevent = async (req, res) => {
    let id = req.params.id
    let create = `select * from event where company_id = ${id}`;
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
