//分页
// layui.use(['laypage', 'layer'], function(){
//     var laypage = layui.laypage
//     ,layer = layui.layer;

//     //执行一个laypage实例
//     laypage.render({
//         elem: 'demo4'
//         ,count: 100
//         ,first: false
//         ,last: false
//         ,groups:4
//         ,prev:'<img src="../img/last.png" alt=""></img>'
//         ,next:'<img src="../img/next.png" alt=""></img>'
//       });
//   });

//点击按钮的样式
$(document).ready(function () {
    //商品类型两个字的按钮样式改变
    $(".shangpin1").click(function () {
        $(".shangpin1").toggleClass("product_types_selected1 product_types_unselect1");
        if ($(".shangpin1").hasClass("product_types_selected1")) {
            $(".shangpin2").removeClass("product_types_selected1").addClass("product_types_unselect1");
            $(".shangpin3").removeClass("product_types_selected1").addClass("product_types_unselect1");
            $(".shangpin4").removeClass("product_types_selected1").addClass("product_types_unselect1");
            $(".shangpin5").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin6").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin7").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin8").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin9").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin10").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin11").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin12").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin13").removeClass("product_types_select2").addClass("product_types_unselect2");
            $(".shangpin14").removeClass("product_types_select2").addClass("product_types_unselect2");


        }

    })
    $(".shangpin2").click(function () {
        $(".shangpin2").toggleClass("product_types_selected1 product_types_unselect1")
        if ($(".shangpin2").hasClass("product_types_selected1")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin3").click(function () {
        $(".shangpin3").toggleClass("product_types_selected1 product_types_unselect1")
        if ($(".shangpin3").hasClass("product_types_selected1")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin4").click(function () {
        $(".shangpin4").toggleClass("product_types_selected1 product_types_unselect1")
        if ($(".shangpin4").hasClass("product_types_selected1")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    //商品类型四个字的按钮样式改变
    $(".shangpin5").click(function () {
        $(".shangpin5").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin5").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin6").click(function () {
        $(".shangpin6").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin6").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin7").click(function () {
        $(".shangpin7").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin7").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin8").click(function () {
        $(".shangpin8").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin7").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin9").click(function () {
        $(".shangpin9").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin9").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin10").click(function () {
        $(".shangpin10").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin10").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin11").click(function () {
        $(".shangpin11").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin11").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin12").click(function () {
        $(".shangpin12").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin12").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin13").click(function () {
        $(".shangpin13").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin13").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
        }
    })
    $(".shangpin14").click(function () {
        $(".shangpin14").toggleClass("product_types_select2 product_types_unselect2")
        if ($(".shangpin14").hasClass("product_types_select2")) {
            $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
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

    //点击出现订单详细内容
    $(".zhuti2_1_1 .more").click(function () {
        //用户选择非纯佣弹出二维码

      if( $(".style2").hasClass("order_types_selected2") ){
          $(".heisemo").show();
          $(".detail_1").hide();
          $(".detail_2").hide();
          $(".detail_3").show();
          $(".heisemo").click(function(){
              $(".heisemo").hide();
          })
      }else if($(".style1").hasClass("order_types_selected1")){
          $(".heisemo").show();
          $(".detail_1").show();
          $(".detail_2").hide();
          $(".detail_3").hide();
      }else{
          $(".heisemo").show();
      }
  })


    //点击关闭订单详情
    $(".detail_1_top img").click(function () {
        $(".heisemo").hide();
    })

    //点击我想接单
    $(".take_order").click(function () {
        $(".detail_1").hide();
        $(".detail_2").show();
        $(".zhuti2_1_1 .more").css("color", "grey");
    })

    //点击关闭我想接单
    $(".detail_1_top img").click(function () {
        $(".heisemo").hide();
    })

    //点击关闭接单详情
    $(".detail_2_top img").click(function () {
        $(".heisemo").hide();
    })

})
