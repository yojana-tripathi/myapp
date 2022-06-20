var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var _ = require('underscore');

//var .con = mysql.createConnection({
 //})


router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('login')
});

router.get('/getLogin', function(req, res, next) {
    console.log(_.max([1,2,3])
    )
    con.query("select * from YOJANA", function (err, result) {
      if (err) throw err;
      console.log(_.map(result, function(data) {return data.id}));
    
     // con.query(sql, function (err, result) {
        //if (err) throw err;
        //console.log(result);

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





