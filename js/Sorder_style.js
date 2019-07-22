var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM4ODU1MTAsInVzZXJJRCI6IjEiLCJpYXQiOjE1NjM3NTU5MTB9.88ICsm9jM08RUZwuwyWL1jFUkTJC3fwEnuR4-WvHWMI";

var pro_style_data = {
    'token': token,
    'dictType': 'productType'
};
$.ajax({
    url: globel + '/hone/backend/dict/list',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(pro_style_data),
    success: function (data) {
        // console.log('商品类型列表', data.data.dictList);
        var list = data.data.dictList;
        $.each(list, function (index, item) {
            $(".product_types").append(
                '<div class="shangpin' + (index + 2)+' product_types_unselect1">' + item.dictType + '</div>'
            );
        })
        //点击商品类型显示样式
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

        $(".shangpin5").click(function () {
            $(".shangpin5").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin5").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin6").click(function () {
            $(".shangpin6").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin6").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin7").click(function () {
            $(".shangpin7").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin7").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin8").click(function () {
            $(".shangpin8").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin7").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin9").click(function () {
            $(".shangpin9").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin9").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin10").click(function () {
            $(".shangpin10").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin10").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin11").click(function () {
            $(".shangpin11").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin11").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin12").click(function () {
            $(".shangpin12").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin12").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin13").click(function () {
            $(".shangpin13").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin13").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin14").click(function () {
            $(".shangpin14").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin14").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin15").click(function () {
            $(".shangpin15").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin15").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin16").click(function () {
            $(".shangpin16").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin16").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin17").click(function () {
            $(".shangpin17").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin17").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin18").click(function () {
            $(".shangpin18").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin18").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin19").click(function () {
            $(".shangpin19").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin19").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })
        $(".shangpin20").click(function () {
            $(".shangpin20").toggleClass("product_types_selected1 product_types_unselect1")
            if ($(".shangpin20").hasClass("product_types_selected1")) {
                $(".shangpin1").removeClass("product_types_selected1").addClass("product_types_unselect1");
            }
        })

    }
})