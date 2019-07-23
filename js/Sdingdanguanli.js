$(document).ready(function(){
    
    $(".reorder1").click(function () {
 
        if ($(".first_couple .sanjiao1").hasClass("white1")) {
            $(".first_couple .sanjiao1").removeClass("white1").addClass("green1");
        }else{
            $(".first_couple .sanjiao1").removeClass("green1").addClass("white1");
        }
        if ($(".first_couple .sanjiao2").hasClass("green2")) {
            $(".first_couple .sanjiao2").removeClass("green2").addClass("white2");
        }else{
            $(".first_couple .sanjiao2").removeClass("white2").addClass("green2");
        }
    })

    //创建时间
    $(".reorder2").click(function () {
        if ($(".second_couple .sanjiao3").hasClass("white1")) {
            $(".second_couple .sanjiao3").removeClass("white1").addClass("green1");
        }else{
            $(".second_couple .sanjiao3").removeClass("green1").addClass("white1");
        }
        if ($(".second_couple .sanjiao4").hasClass("green2")) {
            $(".second_couple .sanjiao4").removeClass("green2").addClass("white2");
        }else{
            $(".second_couple .sanjiao4").removeClass("white2").addClass("green2");

        }
    })


    //跳转到创建订单页面
   $(".create_dingdan").click(function(){
       window.location.href="Schuangjiandingdan.html";
   })
   $(".del1 a:eq(0)").click(function(){
    $(".heisemo").show();
   })
     //点击关闭订单详情
     $(".detail_1_top img").click(function () {
        $(".heisemo").hide();
    })
})