$(document).ready(function () {
    //显示悬浮框
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
    $(".login_out").mouseleave(function () {
        $(".login_out").hide();
    });

    var userType = window.localStorage.getItem("userType");
    //点击跳转页面

     //点击首页跳转到官网
    $(".shouye").click(function () {
        window.localStorage.setItem("ifJumpIndex", "1");
        window.location.href = 'https://www.hongonew.com';
        
    })

    $(".dingdan").click(function () {
        if (userType == '1') {
            window.location.href = "wdingdanzhongxin.html";
        } else if (userType == '2') {
            window.location.href = "sdingdanzhongxin.html";
        }
    })

    $(".dingdanguanli").click(function () {
        if (userType == '1') {
            window.location.href = "wqiangdanguanli.html";
        } else if (userType == '2') {
            window.location.href = "sdingdanguanli.html";
        }
    })
    $(".sendbill").click(function () {
        window.location.href = "schuangjiandingdan.html";
    })
})
//如果登陆显示微信头像和昵称
if (window.localStorage.getItem('userData') != null) {
    var headPic = window.localStorage.getItem("headPic");
    var wxName = window.localStorage.getItem("wxName");
    $(".shouyetouxiang").attr("src", headPic);
    $(".nicheng").html(wxName);
}

