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
        message:req.query.message,
        activity_music,
        activity_cartoon,
        activity_new_situation,
        activity_active

    });
});
router.get('/nid/activity',function(req,res){
    let sql = 'SELECT * FROM music';
    conn.query(sql,function(err,result){
        if (err){
            res.send({success:false,data:err.message});
        }else{
            res.send({success:true,data:result});
        }
    });
})
router.get('/nid1/activity',function(req,res){
    let sql = 'SELECT * FROM cartoon';
    conn.query(sql,function(err,result){
        if (err){
            res.send({success:false,data:err.message});
        }else{
            res.send({success:true,data:result});
        }
    });
})


router.get('/nid2/activity',function(req,res){
    let sql = 'SELECT * FROM newactive';
    conn.query(sql,function(err,result){
        if (err){
            res.send({success:false,data:err.message});
        }else{
            res.send({success:true,data:result});
        }
    });
})
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
router.get('/advertis', function(req, res, next) {
    res.render('./advertis');
});

router.post('/',function(req,res){
    var sql = 'INSERT INTO yanzheng set ?';
    conn.query(sql,req.body,function(err,result){
        if(err){
            return res.json({success:false,data:err.message});
        }
        if(result.affectedRows > 0){
            return res.json({success:true});
        }
        res.json({success:false,data:'插入失败'});
    });
});

var activity_music = [
    {title:'薰衣草音乐节现场实拍',date:'[2016-10-06]'},
    {title:'【重磅福利】打电话就可免费体验2016薰衣草音乐节！',date:'[ 2016-09-27]'},
    {title:'薰衣草音乐节演出名单新鲜出炉',date:'[2016-09-24]'},
    {title:'明星签名照，免费送送送！',date:'[2016-09-23]'},
    {title:'贴车贴送门票活动',date:'[2016-09-15]'},
    {title:'薰衣草音乐节首批演出阵容',date:'[2016-09-12]'},
];

var activity_cartoon = [
    {title:'光影动漫节美图',date:'[ 2016-07-23]'},
];
var activity_new_situation = [
    {title:'门票9.9元，全家人一起透心凉，COOL爽！',date:'[2017-07-01]'},
    {title:'薰衣草是浪漫的化身，拍婚纱照怎能少得了她？[doge] ',date:'[2017-06-29]'},
    {title:'阳光正好，花开正艳！小伙伴想不想来洛阳薰衣草庄园拍照赏花?',date:'[ 2017-06-26]'},
    {title:'参与微信人气助理活动，就有机会1元钱享受价值198元的超值避暑体验套餐',date:'[2017-06-24]'},
    {title:'超值福利，乐水轩游泳票9.9元，快抢！！！',date:'[2017-06-24]'},
    {title:'洛阳薰衣草庄园组织员工开展消防安全应急演练',date:'[2017-06-23]'},
    {title:'洛阳中国薰衣草庄园联合多家景区共同招募景区微信营销达人啦！让你每天发发朋友圈就能赚大钱！',date:'[2017-06-19]'},
    {title:'“10元泡温泉”活动又回来啦！',date:'[ 2017-05-17 ]'},
    {title:'五月暖心“最美妈妈”评选活动',date:'[2017-05-06]'},
    {title:'@洛阳所有学生和家长，这件事一定要知道，对你们很重要……',date:'[2017-05-03 ]'},
    {title:'想买薰衣草种子的游客有福利了',date:'[2017-04-16 ]'},
    {title:'薰衣草庄园梦幻花海节现场实拍',date:'[ 2017-04-06]'},
    {title:'洛阳中国薰衣草庄园2017梦幻花海节4月1日盛大启幕',date:'[2017-03-18]'},
    {title:'春节洛阳这里美得不像话，700万洛阳人都要沸腾了！',date:'[2017-02-01]'},
    {title:'七彩洋伞节亮相薰衣草庄园，十万把洋伞挑战吉尼斯！！',date:'[ 2017-01-13]'},
    {title:'10元泡温泉——薰衣草花香温泉10元泡！',date:'[ 2016-12-14]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'中国薰衣草庄园私汤小院12月3日，公开选房啦！！！',date:'[  2016-11-29]'},
    {title:'重大福利，一元就可以买精油啦！',date:'[ 2016-11-27]'},
    {title:'薰衣草庄园空中航拍，仿佛在瑞士达沃斯小镇！',date:'[ 2016-11-24]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
    {title:'1元购精油礼盒、1元泡温泉活动开始啦！',date:'[ 2016-12-02]'},
];

var activity_active = [
    {title:'吃货福利！薰衣草庄园吃100元送100元啦！！！',date:'[2017-06-02]'},
    {title:'时光正好，微风不噪。如此美景，不可辜负！！！！',date:' [2017-04-14] '},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'【中新网】洛阳薰衣草庄园光影动漫节将于7月8日炫酷上演！',date:' [2016-07-09]'},
    {title:'【大河客户端】光影动漫空降洛阳薰衣草庄园：一场明晃晃、活生生的魔幻童话。！',date:' [2016-07-09]'},
    {title:'【中国商务新闻网】洛阳:中国薰衣草庄园打造亲子夜宴光影动漫节！',date:' [ 2016-07-09]'},
    {title:'【中国网】洛阳:中国薰衣草庄园打造亲子夜宴光影动漫节',date:' [ 2016-07-09]'},
    {title:'【河南旅游资讯网】最炫盛夏夜，光影动漫节和你相约洛阳薰衣草庄园',date:' [ 2016-07-09]'},
    {title:'【大象快报】 洛阳:中国薰衣草庄园打造亲子夜宴光影动漫节',date:' [2016-07-09 ]'},
    {title:'【中国河南网】洛阳:中国薰衣草庄园打造亲子夜宴光影动漫节',date:' [ 2016-07-09]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
    {title:'薰衣草庄园花香温泉休息大厅正式上线啦！',date:' [2016-10-21]'},
];


module.exports = router;
