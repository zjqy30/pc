//网红纯佣订单大厅

var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');
var dataType1 = '';
var loginUserId = localStorage.getItem("userId");

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

$(".time2").click(function () {
    console.log("6666");
    dataType1 = '1';
    dataType_fun(dataType1);
})
$(".time3").click(function () {
    dataType1 = '2';
    dataType_fun(dataType1);
})
$(".time4").click(function () {
    dataType1 = '3';
    dataType_fun(dataType1);
})