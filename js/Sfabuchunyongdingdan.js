
$(document).ready(function () {
    //跳转到创建订单页面
    $(".create_dingdan").click(function () {
        window.location.href = "Schuangjiandingdan.html";
    })
})
var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');

//如果登陆显示微信头像和昵称
var headPic = window.localStorage.getItem("headPic");
var wxName = window.localStorage.getItem("wxName");
var userType = window.localStorage.getItem("userType");
var loginUserId = window.localStorage.getItem("userId");

if (headPic && wxName) {
    if (userType == '2') {
        $(".shouyetouxiang").attr("src", headPic);
        $(".nicheng").html(wxName);
    }
}

//点击创建订单按钮
$(".last_input1").click(function () {
    console.log($(".adver").next().val());
    //正则表达式的判断
    var salesBefore = $(".pro_sale").next().val();
    var fansNums = $(".daren_fans_demand").next().val();
    var profitRatio = $(".com_rate").next().val();
    // var reg2=/ /;
    var reg1 = /^[1-9]\d*$|^0$/;
    if (reg1.test(salesBefore) != true) {
        alert("产品之前销售只能填写数字");
        window.location.reload()//实时刷新
    } else if (reg1.test(fansNums) != true) {
        alert("粉丝数量只能填写数字");
        window.location.reload()//实时刷新
    } else if (reg1.test(profitRatio) != true) {

        alert("佣金比例只能填写0~100的数字");
        window.location.reload()//实时刷新
    } else {
        var order_content = {
            "token": token,
            "title": $(".adver").next().val(),
            "productType": $(".pro_type_list option:selected").val(),
            "shopLevel": $(".store_level").next().val(),
            "salesBefore": $(".pro_sale").next().val(),
            "starPlate": $(".daren_level_demand_list option:selected").val(),
            "fansNums": $(".daren_fans_demand").next().val(),
            "starTag": $(".daren_style_list option:selected").val(),
            "ifSend": $(".send_sample_list option:selected").val(),
            "profitRatio": $(".com_rate").next().val(),
            "loginUserId": loginUserId
        }
        // $(".last_input1").click(function () {
        $.ajax({
            url: globel + '/hone/web/pureOffer/create',
            dataType: 'json',
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(order_content),
            success: function (data) {
                console.log(data);
                var errorCode = data.errorCode;
                if (errorCode == 0) {
                    alert("订单创建成功");
                    window.location.reload()//实时刷新
                } else if (errorCode == 1) {
                    alert("订单创建失败");
                    window.location.reload()//实时刷新
                } else {
                    jugeToken(errorCode);
                }
            }
        })
        // })
    }



})
