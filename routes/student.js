var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 console.log(req)
 res.json({name:"yojana"});
});

router.get('/:da-:ta', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da)
    res.json({name:req.params.da +" and "+req.params.ta});
   });
   router.get('/:da', function(req, res, next) {
    // res.render('student', { title:req.params.da });
    console.log(req.params.da)
    res.json({name:req.params.da});
   });
router.get('/:ta', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.ta)
    res.json({name:req.params.ta});
   });

  

module.exports = router;
