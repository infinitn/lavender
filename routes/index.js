var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('./page1',function (req,res,next) {
//    res.render('./page1') ;
// });
//待处理  注册路由
module.exports = router;
