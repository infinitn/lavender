var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'lavender'
})
conn.connect(function(err){
    if (err) {
        throw err;
    }else{
        console.log('连接成功');
}
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

router.get('/api/about',function (req,res) {
    let sql = `SELECT * FROM scenery`;
    conn.query(sql,function(err,result){
        if(err){
            res.send({success:false,data:err.message});
        }else{
            res.send({success:true,data:result});
        }
    });
})
router.get('/apis/about',function (req,res) {
    let sql = `SELECT * FROM shop`;
    conn.query(sql,function(err,result){
        if(err){
            res.send({success:false,data:err.message});
        }else{
            res.send({success:true,data:result});
        }
    });
})

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


module.exports = router;
