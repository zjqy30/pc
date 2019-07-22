$(document).ready(function () {

    //显示悬浮框
    $(".shouye").mouseenter(function () {
        $(".shouye_show").show();
    });
    $(".shouye").mouseleave(function () {
        $(".shouye_show").hide();
    });

    $(".dingdan").mouseenter(function () {
        $(".dingdan_show").show();
    });
    $(".dingdan").mouseleave(function () {
        $(".dingdan_show").hide();
    });

    $(".dingdanguanli").mouseenter(function () {
        $(".dingdanguanli_show").show();
    });
    $(".dingdanguanli").mouseleave(function () {
        $(".dingdanguanli_show").hide();
    });

    $(".xiangxiazhankai").mouseenter(function () {
        $(".login_out").show();
    });


    //实现左边侧边栏的页面跳转
    $(".shouye").click(function(){
        window.location.href="Wshouye.html";
    })
    $(".dingdan").click(function(){
        window.location.href="Wdingdanzhongxin.html";
    })

    $(".dingdanguanli").click(function(){
        window.location.href="Wqiangdanguanli.html";
    })
})
