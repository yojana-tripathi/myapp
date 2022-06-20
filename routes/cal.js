var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('cal')
//   res.render('cal')
});


router.post('/cal', function(req,res, next){
    res.json({Name: req.body})
    console.log(req.body)
})

module.exports = router;
