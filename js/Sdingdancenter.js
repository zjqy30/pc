//点击按钮的样式
$(document).ready(function () {

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

    //商品类型的按钮样式改变
    $(".shangpin1").click(function () {
        $(".shangpin1").toggleClass("product_types_selected1 product_types_unselect1");
        if ($(".shangpin1").hasClass("product_types_selected1")) {
            $(".shangpin1~div").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })

    //纯佣样式改变
    $(".style1").click(function () {
        $(".style1").toggleClass("order_types_selected1 product_types_unselect1")
        if ($(".style1").hasClass("order_types_selected1")) {
            $(".style2").removeClass("order_types_selected2").addClass("order_types_unselected2")
        }
    })
    //非纯佣样式改变
    $(".style2").click(function () {
        $(".style2").toggleClass("order_types_selected2 order_types_unselected2")
        if ($(".style2").hasClass("order_types_selected2")) {
            $(".style1").removeClass("order_types_selected1").addClass("product_types_unselect1")
        }
    })
    //发布时间的两个字的样式改变
    $(".time1").click(function () {
        $(".time1").toggleClass("add_time_selected1 add_time_unselected1");
        if ($(".time1").hasClass("add_time_selected1")) {
            $(".time2").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time3").removeClass("add_time_selected2").addClass("add_time_unselected2");
            $(".time4").removeClass("add_time_selected2").addClass("add_time_unselected2");
        }
    })

    $(".time2").click(function () {
        $(".time2").toggleClass("add_time_selected1 add_time_unselected1");
        if ($(".time2").hasClass("add_time_selected1")) {
            $(".time1").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time3").removeClass("add_time_selected2").addClass("add_time_unselected2");
            $(".time4").removeClass("add_time_selected2").addClass("add_time_unselected2");
        }
    })
    //发布时间的三个字的样式改变
    $(".time3").click(function () {
        $(".time3").toggleClass("add_time_selected2 add_time_unselected2");
        if ($(".time3").hasClass("add_time_selected2")) {
            $(".time1").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time2").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time4").removeClass("add_time_selected2").addClass("add_time_unselected2");
        }
    })
    $(".time4").click(function () {
        $(".time4").toggleClass("add_time_selected2 add_time_unselected2");
        if ($(".time4").hasClass("add_time_selected2")) {
            $(".time1").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time2").removeClass("add_time_selected1").addClass("add_time_unselected1");
            $(".time3").removeClass("add_time_selected2").addClass("add_time_unselected2");
        }
    })
    //跳转到创建订单页面
    $(".create_dingdan").click(function () {
        window.location.href = "Schuangjiandingdan.html";
    })

     //点击关闭订单详情
     $(".detail_1_top img").click(function () {
        $(".heisemo").hide();
    })
})
