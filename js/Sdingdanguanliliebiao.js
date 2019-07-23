var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM4ODU1MTAsInVzZXJJRCI6IjEiLCJpYXQiOjE1NjM3NTU5MTB9.88ICsm9jM08RUZwuwyWL1jFUkTJC3fwEnuR4-WvHWMI';

var manage_list = {
    'token': token,
    'pageNumber': '1',
    'pageSize': '10',
    'loginUserId': 'fb8abfba4f62468598b162ac8417c28f',
    'keys': ''
};

$.ajax({
    url: globel + '/hone/web/pureOffer/selfList',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(manage_list),
    success: function (data) {
        console.log('订单列表', data.data.pageData.list);
        var list = data.data.pageData.list;
        $.each(list, function (index, item) {
            //订单中心的内容开始
            $(".zhuti2").append(
                    '<div class="zhuti2_1_1">' +
                        '<div class="headline">' + item.title + '</div>' +
                        '<div class="more">更多资料</div>' +
                        '<div class="addTime">' +
                            '<p>发布时间：<em>' + item.createDate + '</em></p>' +
                        '</div>' +
                        '<div class="product_type_left">' +
                            '<p>商品类型：<em>' + item.productType + '</em></p>' +
                        '</div>' +
                        '<div class="fans_demand">' +
                            ' <p>粉丝要求：<em>' + item.fansNums + '</em></p>' +
                        '</div >' +
                        '<div class="daren_platform">' +
                            '<p>达人平台：<em>' + item.starPlate + '</em></p>' +
                        '</div>' +
                        '<div class="commission_rate">' +
                            '<p>佣金比例：<em>' + item.profitRatio + '</em></p>' +
                        '</div >' +
                    '</div >' 
            )
            //点击出现订单详细内容
            $(".zhuti2_1_1 .more").click(function () {
            //     if(item.id==''){

            //     }

                //用户选择非纯佣弹出二维码
                if ($(".style2").hasClass("order_types_selected2")) {
                    $(".heisemo").show();
                    $(".detail_1").hide();
                    $(".detail_2").hide();
                    $(".detail_3").show();
                    $(".heisemo").click(function () {
                        $(".heisemo").hide();
                    })
                } else if ($(".style1").hasClass("order_types_selected1")) {
                    $(".heisemo").show();
                    $(".detail_1").show();
                    $(".detail_2").hide();
                    $(".detail_3").hide();
                } else {
                    $(".heisemo").show();
                }
            })

            //点击关闭订单详情
            $(".detail_1_top img").click(function () {
                $(".heisemo").hide();
            })
            //订单中心的内容结束



        })
    }
})