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
    $(".shouye").click(function () {
        window.localStorage.setItem("ifJumpIndex","1");
        window.location.href = "wshouye.html";
        
    })
    $(".dingdan").click(function () {
        window.location.href = "wdingdanzhongxin.html";
    })

    $(".dingdanguanli").click(function () {
        window.location.href = "wqiangdanguanli.html";
    })
})
//如果登陆显示微信头像和昵称
var headPic = window.localStorage.getItem("headPic");
var wxName = window.localStorage.getItem("wxName");
var userType = window.localStorage.getItem("userType");
if (headPic && wxName) {
    if (userType == '1') {
        $(".shouyetouxiang").attr("src", headPic);
        $(".nicheng").html(wxName);
    }
}




