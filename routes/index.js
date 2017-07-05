var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('./about',{
        message:req.query.message,
        about_nav
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

//about页面数据
var about_nav = [
    {title:'交通指引'},
    {title:'庄园介绍'},
    {title:'庄园美景'},
    {title:'香草商店'},
    {title:'婚纱婚庆'},
    {title:'市场合作'},
]
module.exports = router;
