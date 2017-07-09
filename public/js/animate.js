/**
 * Created by luhan on 2017/7/9.
 */
(function(){
    //        退出
    window.exit=[];
    //        进场
    window.enter=[];
    //        进场动画
    enter[0]=function(){
        console.log(123);
        $('.index_logo').show().velocity({
            'translateY':0
        },0).delay(300).velocity({
            'translateY':80,
            'scale':1.1
        },500).velocity({
            'translateY':50,
            'scale':1
        },300,function(){
            lock=true;
        });
    }
        enter[1]=function(){
            $('.index_page1').show();
            $('.index_page1 #page1_img1').show().velocity({
                'translateY':0,
                'translateX':-700,
                'scale':1.2
            },0).delay(200).velocity({
                'translateY':-150,
                'translateX':-700,
                'scale':1.0
            },1500);
            $('.index_page1 .index_text').show();
            $('.index_text .t_zg').show().velocity({
                'translateX':100,
            },0).delay(200).velocity({
                'translateX':0,
            },300,function(){
                $('.index_text .t_xun').velocity({
                    'translateX':300,
                },100).show().delay(300).velocity({
                    'translateX':0,
                },300);
            });
            $('.index_page1 .t_cn').fadeIn(1300);
            $('.index_page1 .video').show().velocity({
                'translateY':200,
            },0).delay(200).velocity({
                'translateY':0,
            },400,function(){
                lock=true;
            });
        }

        enter[2]=function(){
            $('.index_page2').show();
            $('.index_page2 #page2_img1').show().velocity({
                'translateY':0,
                'translateX':-700,
                'scale':1.2
            },0).delay(200).velocity({
                'translateY':-150,
                'translateX':-700,
                'scale':1.0
            },1500);
            $('.index_page2 .index_text').show();
            $('.index_text .t_zg').show().velocity({
                'translateX':100,
            },0).delay(200).velocity({
                'translateX':0,
            },300,function(){
                $('.index_text .t_xun').velocity({
                    'translateX':300,
                },100).show().delay(300).velocity({
                    'translateX':0,
                },300);
            });
            $('.index_page2 .t_cn').fadeIn(1300);
            $('.index_page2 .video').show().velocity({
                'translateY':200,
            },0).delay(200).velocity({
                'translateY':0,
            },400,function(){
                lock=true;
            });
        }
    enter[3]=function(){
        $('.index_page3').show();
        $('.index_page3 #page3_img1').show().velocity({
            'translateY':0,
            'translateX':-700,
            'scale':1.2
        },0).delay(200).velocity({
            'translateY':-150,
            'translateX':-700,
            'scale':1.0
        },1500);
        $('.index_page3 .index_text').show();
        $('.index_text .t_zg').show().velocity({
            'translateX':100,
        },0).delay(200).velocity({
            'translateX':0,
        },300,function(){
            $('.index_text .t_xun').velocity({
                'translateX':300,
            },100).show().delay(300).velocity({
                'translateX':0,
            },300);
        });
        $('.index_page3 .t_cn').fadeIn(1300);
        $('.index_page3 .video').show().velocity({
            'translateY':200,
        },0).delay(200).velocity({
            'translateY':0,
        },400,function(){
            lock=true;
        });
    }

//    退场动画
    exit[0]=function(){

        $('.index_logo').fadeOut();
    }
    exit[1]=function(){
        console.log(0);
        $('.index_page1').hide();
    }
    exit[2]=function(){
        $('.index_page2').fadeOut();
    }
    exit[3]=function(){
        $('.index_page3').fadeOut();
    }
})();