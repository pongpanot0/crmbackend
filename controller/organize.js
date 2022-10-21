const db = require("../db/db");

exports.createorganize = async (req, res) => {
  let organize_name = req.body.organize_name;
  let company_id = req.body.company_id;
  let created_by = req.body.created_by;
  let created_at =  moment(new Date()).format("YYYY-MM-DD HH:mm");
  let updated_by = req.body.updated_by;
  let updated_at =  moment(new Date()).format("YYYY-MM-DD HH:mm");
  let create = `insert into organize (organize_name,company_id,created_by,created_at,updated_by,updated_at)  value('${organize_name}','${company_id}','${created_by}','${created_at}','${updated_by}','${updated_at}') `
  db.query(create,(err,result)=>{
    if(err){
        console.log(err)
    }
    if(result){
        res.send({
            status:200,
            data:result
        })
    }
  })
};

exports.getorganize = async (req, res) => {
    let id = req.params.id
    let create = `select * from organize where company_id = ${id}`;
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

  exports.getorganizeByorganize = async (req, res) => {
    let id = req.params.id
    let create = `select * from organize where organize_id = ${id}`;
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