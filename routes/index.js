var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('./about',{
        message:req.query.message
    });
});
router.get('/activity', function(req, res, next) {
    res.render('./activity',{
        message:req.query.message
    });
});
router.get('/play', function(req, res, next) {
    res.render('./play',{
        message:req.query.message
    });
});
router.get('/eat', function(req, res, next) {
    res.render('./eat',{
        message:req.query.message
    });
});
router.get('/reside', function(req, res, next) {
    res.render('./reside',{
        message:req.query.message
    });
});
router.get('/map', function(req, res, next) {
    res.render('./map',{
        message:req.query.message
    });
});
//待处理  注册路由
module.exports = router;
