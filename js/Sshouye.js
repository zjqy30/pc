$(document).ready(function () {
    //首页
    $(".shouye").mouseenter(function () {
        $(".shouye_show").show();
    });
    $(".shouye").mouseleave(function () {
        $(".shouye_show").hide();
    });
     //订单中心
    $(".dingdan").mouseenter(function () {
        $(".dingdan_show").show();
    });
    $(".dingdan").mouseleave(function () {
        $(".dingdan_show").hide();
    });
    //订单管理
    $(".dingdanguanli").mouseenter(function () {
        $(".dingdanguanli_show").show();
    });
    $(".dingdanguanli").mouseleave(function () {
        $(".dingdanguanli_show").hide();
    });
    //创建订单
    $(".sendbill").mouseenter(function () {
        $(".chuangjiandingdan_show").show();
    });
    $(".sendbill").mouseleave(function () {
        $(".chuangjiandingdan_show").hide();
    });
    //显示退出登录
    $(".xiangxiazhankai").mouseenter(function () {
        $(".login_out").show();
    });


    //点击跳转页面
    $(".shouye").click(function(){
        window.location.href="Sshouye.html";
    })
    $(".dingdan").click(function(){
        window.location.href="Sdingdanzhongxin.html";
    })

    $(".dingdanguanli").click(function(){
        window.location.href="Sdingdanguanli.html";
    })
    $(".sendbill").click(function(){
        window.location.href="Schuangjiandingdan.html";
    })
})
