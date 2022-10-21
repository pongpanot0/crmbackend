const db = require("../db/db");
const moment = require("moment");
moment.locale("th");

exports.creatOrder = async (req, res) => {
  let order_name = req.body.order_name;
  let order_detail = req.body.order_detail;
  let company_id = req.body.company_id;
  let organize_id = req.body.organize_id;
  let order_timeline = 1;
  let created_by = req.body.created_by;
  let created_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let updated_by = req.body.updated_by;
  let updated_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let responsibleperson = req.body.responsibleperson;
  let order_price = req.body.order_price;
  var json = JSON.stringify(req.body.inputFields);
  console.log(req.body.inputFields);
  var ress = req.body.inputFields
    .map((bill) => bill.plice)
    .reduce((acc, amount) => parseInt(acc) + parseInt(amount));
  console.log(ress);
  const datea = [{
    
  }]
  let create = `insert into orders(no_quotation,order_name,order_detail,company_id,organize_id,order_timeline,created_by,created_at,updated_by,updated_at,responsibleperson,order_price) value ('${json}','${order_name}','${order_detail}','${company_id}','${organize_id}','${order_timeline}','${created_by}','${created_at}','${updated_by}','${updated_at}','${responsibleperson}','${order_price}')`;
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
  let create = `
  select o.*,u.* from orders o
  left outer join users u ON (o.responsibleperson=u.user_id)
  where o.company_id = ${id}  ORDER BY updated_at DESC
  `;
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
exports.getorderRepro = async (req, res) => {
  let id = req.params.id;
  let create = `
  select o.*,u.* from orders o
  left outer join users u ON (o.responsibleperson=u.user_id)
  where o.responsibleperson = ${id}  ORDER BY updated_at DESC
  `;
  let count1 = `select  count(*) as count1 from orders where responsibleperson = ${id} and order_timeline=1`;
  let count2 = `select  count(*) as count2 from orders where responsibleperson = ${id} and order_timeline=2`;
  let count3 = `select  count(*) as count3 from orders where responsibleperson = ${id} and order_timeline=3`;
  let count4 = `select  count(*) as count4 from orders where responsibleperson = ${id} and order_timeline=4`;
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
exports.getorderDepartment = async (req, res) => {
  let id = req.params.id;
  let create = `
  select o.*,u.* from orders o
  left outer join users u ON (o.responsibleperson=u.user_id)
  where o.organize_id = ${id}  ORDER BY updated_at DESC
  `;
  let count1 = `select  count(*) as count1 from orders where organize_id = ${id} and order_timeline=1`;
  let count2 = `select  count(*) as count2 from orders where organize_id = ${id} and order_timeline=2`;
  let count3 = `select  count(*) as count3 from orders where organize_id = ${id} and order_timeline=3`;
  let count4 = `select  count(*) as count4 from orders where organize_id = ${id} and order_timeline=4`;
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
  let company_id = req.body.company_id;
  let organize_id = req.body.organize_id;
  let order_timeline = req.body.order_timeline;
  let created_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let updated_by = req.body.updated_by;
  let timeline = req.body.timeline;
  let orderphase2_detail = req.body.orderphase2_detail;
  let orderphase2_pic = req.body.orderphase2_pic;
  let order_id = req.body.order_id;
  let updated_at = moment(new Date()).format("YYYY-MM-DD HH:mm");
  let job_end = moment(new Date()).format("YYYYMM");
  console.log(job_end);
  let create = `update orders set order_timeline=${timeline},updated_at='${updated_at}',updated_by=${updated_by},job_end=${job_end} where order_id =${id} `;
  let phase2 = `insert into orderphase2 (organize_id,company_id,created_by2,created_at2,order_id,orderphase2_pic,orderphase2_detail) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}')`;
  let phase3 = `insert into orderphase3 (organize_id,company_id,created_by3,created_at3,order_id,orderphase3_pic,orderphase3_detail) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}')`;
  let phase4 = `insert into orderphase4 (organize_id,company_id,created_by4,created_at4,order_id,orderphase4_pic,orderphase4_detail,job_end) value ('${organize_id}','${company_id}','${updated_by}','${created_at}','${order_id}','${orderphase2_pic}','${orderphase2_detail}','${job_end}')`;
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
exports.getSumprice = async (req, res) => {
  const id = req.params.id;
  let sixmouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(6, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let fivemouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(5, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let fourmouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(4, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let threemouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(3, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let twomouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(2, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let onemouth = `SELECT job_end,SUM(order_price) FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(1, "month")
    .format("YYYYMM")} and company_id =${id}`;
  let nowmouth = `SELECT job_end,SUM(order_price)  FROM orders WHERE job_end =${moment(
    new Date()
  )
    .subtract(0, "month")
    .format("YYYYMM")} and company_id =${id}`;
  db.query(sixmouth, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result) {
      const six = result;
      db.query(fivemouth, (err, result) => {
        if (err) {
          console.log(err);
        }

        if (result) {
          const five = result;
          db.query(fourmouth, (err, result) => {
            if (err) {
              console.log(err);
            }

            if (result) {
              const four = result;
              db.query(threemouth, (err, result) => {
                if (err) {
                  console.log(err);
                }

                if (result) {
                  const three = result;
                  db.query(twomouth, (err, result) => {
                    if (err) {
                      console.log(err);
                    }

                    if (result) {
                      const two = result;
                      db.query(onemouth, (err, result) => {
                        if (err) {
                          console.log(err);
                        }

                        if (result) {
                          const one = result;
                          db.query(nowmouth, (err, result) => {
                            if (err) {
                              console.log(err);
                            }

                            if (result) {
                              res.send({
                                status: 200,
                                now: result,
                                one: one,
                                two: two,
                                three: three,
                                four: four,
                                five: five,
                                six: six,
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
        }
      });
    }
  });
};
exports.getpdf = async (req, res) => {
  const { createInvoice } = require("../controller/pdf.js");

  const invoice = {
    shipping: {
      name: "John Doe",
      address: "1234 Main Street",
      city: "San Francisco",
      state: "CA",
      country: "US",
      postal_code: 94111,
    },
    items: [
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
      {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000,
      },
      {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000,
      },
    ],
    subtotal: 8000,
    paid: 0,
    invoice_nr: 1234,
  };

  createInvoice(invoice, "invoice.pdf");
};
