

//点击按钮的样式
$(document).ready(function () {
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



    //点击关闭订单详情
    $(".detail_1_top img").click(function () {
        $(".detail_1").remove();
        $(".heisemo").hide();
    })

    //点击关闭接单详情
    $(".detail_2_top img").click(function () {
        $(".detail_2").hide();
        $(".detail_1").remove();
        // window.location.reload();
        $(".heisemo").hide();
    })

})
