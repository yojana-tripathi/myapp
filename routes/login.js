var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});

router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('login')
});

router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `Yojana` (`email`, `pass`) \
    VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
      // var sql1 = "select * from `qqq`"
      // con.query(sql1, function (err, result) {
      //   if (err) throw err;
      //   console.log(result);
      // });
res.json({"Name":req.body})
 });

 var pool        = mysql.createPool({
  connectionLimit : 10, // default = 10
  host            : 'easylearning.guru',
  user            : 'kcc_student',
  password        : 'Kccitm.edu.in1',
  database        : 'kccStudent'
});

router.get('/read', function (req, res) {
  pool.getConnection(function (err, connection) {
      connection.query("SELECT * FROM Yojana", function (err, rows) {
          connection.release();
          if (err) throw err;

          console.log(rows.length);
          res.send(JSON.stringify(rows));
      });
  });
});
module.exports = router;