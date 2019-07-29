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
        window.location.href="sshouye.html";
    })
    $(".dingdan").click(function(){
        window.location.href="sdingdanzhongxin.html";
    })

    $(".dingdanguanli").click(function(){
        window.location.href="sdingdanguanli.html";
    })
    $(".sendbill").click(function(){
        window.location.href="schuangjiandingdan.html";
    })
})
//如果登陆显示微信头像和昵称
var headPic = window.localStorage.getItem("headPic");
var wxName = window.localStorage.getItem("wxName");
var userType = window.localStorage.getItem("userType");

if (headPic && wxName) {
    if (userType == '2') {
        $(".shouyetouxiang").attr("src", headPic);
        $(".nicheng").html(wxName);
    }
}