$(function(){
    var _this1=null;
    $('.nav>li').hover(function(){
        _this1=$(this);
        _this1.css({"background-image":"-webkit-linear-gradient(left,#BA17CA,#641B87,#43196F,#461B6A,#BA17CA)"})
            .find('.second-nav').slideToggle(500);

    },function(){
        _this1.css({"background-image":"-webkit-linear-gradient(top,#802396,#7A2292,#391867)"}).find('.second-nav').hide();
    });
});