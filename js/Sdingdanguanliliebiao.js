//纯佣订单大厅

var globel = 'http://192.168.0.166:8080';
var token = window.localStorage.getItem('token');

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


$(".time2").click(function () {
    dataType = '1';
    dataType_fun(dataType1);
})
$(".time3").click(function () {
    dataType = '2';
    dataType_fun(dataType1);
})
$(".time4").click(function () {
    dataType = '3';
    dataType_fun(dataType1);
})

