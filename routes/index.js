var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('cal');
  });

  router.post('/add', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a+b;
    res.render('cal',{c});
  });

  router.post('/multi', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a*b;
    res.render('cal',{c});
  });

  router.post('/sub', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a-b;
    res.render('cal',{c}); 
  });

  router.post('/div', function(req, res) {
    var a= parseInt(req.body.num1);
    var b= parseInt(req.body.num2);
    var c=a/b;
    res.render('cal',{c}); 
  });



module.exports = router;
































//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next){
  //res.send('hello')
  //res.render('cal')
//});


//module.exports = router;
