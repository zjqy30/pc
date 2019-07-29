// var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');

var dataType1 = '';
var productId = '';
var loginUserId = localStorage.getItem("userId");

var headPic = window.localStorage.getItem("headPic");
var wxName = window.localStorage.getItem("wxName");
var userType = window.localStorage.getItem("userType");

$(".shouyetouxiang").attr("src", headPic);
$(".nicheng").html(wxName);

show_pro_style();
dataType_fun(dataType1, productId);

function show_pro_style() {
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
            var errorCode = data.errorCode;
            if (errorCode == 0) {
                var list = data.data.dictList;
                $.each(list, function (index, item) {
                    //显示订单类型按钮
                    $(".product_types").append(
                        '<div class="shangpin product_types_unselect1" id=' + item.id + ' style="cursor: pointer">' + item.dictValue + '</div>'
                    );
                })

                $('.shangpin').each(function () {
                    $(this).click(function () {

                        //获取当前商品类型的id
                        productId = $(this).attr('id');

                        //给当前商品类型添加样式
                        $(this).toggleClass("product_types_selected1 product_types_unselect1")
                        if ($(this).hasClass("product_types_selected1")) {
                            $(this).siblings().removeClass("product_types_selected1").addClass("product_types_unselect1");
                            $(".product_types1").removeClass("product_types_unselect1");
                        }
                        //添加完样式之后，根据当前得商品类型进行筛选
                        dataType_fun(dataType1, productId);

                    })
                })
                $(".shangpin1").click(function () {
                    productId = '';
                    dataType_fun(dataType1, productId);
                })
            } else if (errorCode == 1) {
                alert("请求出错！");
            } else {
                jugeToken(errorCode);
            }
        }
    })
}

var list = null;
var globelPageNumber = "1";

//遍历订单大厅列表
function dataType_fun(dataType1, productId, pageNumber) {

    if (pageNumber == null) {
        pageNumber = "1";
    }
    var pageSize = "6";

    var hall_list = {
        'token': token,
        'pageNumber': pageNumber,
        'pageSize': pageSize,
        'status': 'AP',
        'productType': productId,
        'dateType': dataType1
    };
    console.log("请求参数" + JSON.stringify(hall_list));




    $.ajax({
        url: globel + '/hone/web/pureOffer/list',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(hall_list),
        success: function (data) {
            var errorCode = data.errorCode;
            if (errorCode == 0) {
                console.log('订单列表', data.data.pageData);
                list = data.data.pageData.list;

                var totalCount = data.data.pageData.totalCount;
                console.log(totalCount);


                if (totalCount == 0) {
                    totalPage = 1;
                } else {
                    var totalPage = totalCount % pageSize == 0 ? totalCount / Number(pageSize) : (Math.ceil(totalCount / Number(pageSize)));
                }


                $(".paging").html("");

                if (pageNumber != 1) {
                    $(".paging").append('<div class="page page_select" onclick=pageLimit(' + (Number(pageNumber) - 1) + ',' + dataType1 + ',' + productId + ') ><img src="../img/last.png" alt=""></div>');
                } else {
                    $(".paging").append('<div class="page page_unselect" ><img src="../img/last.png" alt=""></div>');
                }

                if (dataType1 == "" || dataType1 == undefined) {
                    dataType1 = null;
                }
                if (productId == "" || productId == undefined) {
                    productId = null;
                }


                $(".paging").append('<div class="page page_select page_select_word" >' + pageNumber + '/' + totalPage + '</div>');

                if (pageNumber != totalPage) {
                    $(".paging").append('<div class="page page_select" onclick=pageLimit(' + (Number(pageNumber) + 1) + ',' + dataType1 + ',' + productId + ')><img src="../img/next.png" alt=""></div>');
                } else {
                    $(".paging").append('<div class="page page_unselect" ><img src="../img/next.png" alt=""></div>');
                }

                $(".paging").append('<div class="page page_unselect" style="border: 1px solid transparent" ><input type="text" id="inputNumber" value=' + globelPageNumber + ' style="width:60%;height:90%"  ></input>');
                $(".paging").append('<div class="page page_select page_select_word" onclick=inputPageNumberPageLimit(' + dataType1 + ',' + productId + ')>跳转</div>')
                console.log("总页数=" + totalPage);
                $(".zhuti2").html('');
                if (userType == '1') {
                    $.each(list, function (index, item) {
                        var offerId = item.id;
                        console.log("offerId=" + offerId);
                        //订单中心的内容开始 
                        $(".zhuti2").append(
                            '<div class="zhuti2_1_1">' +
                            '<div class="headline">' + item.title + '</div>' +
                            '<div class="more more' + index + ' " onclick=moreclick(' + JSON.stringify(index + '_' + offerId) + ')  style="cursor: pointer">更多资料</div>' +
                            '<div class="addTime">' +
                            '<p>发布时间：<em>' + item.createDate + '</em></p>' +
                            '</div>' +
                            '<div class="product_type_left">' +
                            '<p>商品类型：<em>' + item.productType + '</em></p>' +
                            '</div>' +
                            '<div class="fans_demand">' +
                            ' <p>粉丝要求：<em>' + item.fansNums + '万</em></p>' +
                            '</div >' +
                            '<div class="daren_platform">' +
                            '<p>达人平台：<em>' + item.starPlate + '</em></p>' +
                            '</div>' +
                            '<div class="commission_rate">' +
                            '<p>佣金比例：<em>' + item.profitRatio + '%</em></p>' +
                            '</div >' + '</div >'
                        )
                    })
                } else if (userType == '2') {
                    $.each(list, function (index, item) {
                        var id = item.id
                        var ifSend = '';
                        if (item.ifSend == 1) {
                            ifSend = "是";
                        } else {
                            ifSend = "否";
                        }
                        //订单中心的内容开始 
                        $(".zhuti2").append(
                            '<div class="zhuti2_1_1">' +
                            '<div class="headline">' + item.title + '</div>' +
                            '<div class="more more' + index + '" onclick=fun(' + item + ') style="cursor: pointer">更多资料</div>' +
                            '<div class="addTime">' +
                            '<p>发布时间：<em>' + item.createDate + '</em></p>' +
                            '</div>' +
                            '<div class="product_type_left">' +
                            '<p>商品类型：<em>' + item.productType + '</em></p>' +
                            '</div>' +
                            '<div class="fans_demand">' +
                            ' <p>粉丝要求：<em>' + item.fansNums + '万</em></p>' +
                            '</div >' +
                            '<div class="daren_platform">' +
                            '<p>达人平台：<em>' + item.starPlate + '</em></p>' +
                            '</div>' +
                            '<div class="commission_rate">' +
                            '<p>佣金比例：<em>' + item.profitRatio + '%</em></p>' +
                            '</div >' +
                            '</div >'
                        )

                        //点击出现订单详细内容
                        $(".zhuti2_1_1 .more" + index).click(function () {

                            $(".heisemo").append(
                                '<div class="detail_1">' +
                                '<div class="detail_1_top">' +
                                '<div class="detail_1_top_left">' + item.title + '</div>' +
                                '<img src="../img/close.png" alt="" style="cursor: pointer">' +
                                '</div>' +
                                '<div class="list1">' +
                                '<a>商品类型：</a>' +
                                '<em>' + item.productType + '</em>' +
                                '</div>' +
                                '<div class="list2">' +
                                '<a>发布时间：</a>' +
                                '<em>' + item.createDate + '</em>' +
                                '</div>' +
                                '<div class="list3">' +
                                '<a>达人类型：</a>' +
                                '<div class="list3_1">' + item.starTag + '</div>' +
                                // <div class="list3_1">三农</div>
                                // <div class="list3_1">美女</div>
                                '</div>' +
                                '<div class="list4">' +
                                '<a>粉丝要求：</a>' +
                                '<em>' + item.fansNums + '万</em>' +
                                '</div>' +
                                '<div class="list5">' +
                                '<a>达人平台：</a>' +
                                '<em>' + item.starPlate + '</em>' +
                                '</div>' +
                                '<div class="list6">' +
                                '<a>店铺等级：</a>' +
                                '<em>' + item.shopLevel + '</em>' +
                                '</div>' +
                                '<div class="list7">' +
                                '<a>佣金比例：</a>' +
                                '<em>' + item.profitRatio + '%</em>' +
                                '</div>' +
                                '<div class="list8">' +
                                '<a>是否寄样：</a>' +
                                '<em>' + ifSend + '</em>' +
                                '</div>' +
                                '<div class="list9">' +
                                '<a>产品以往销量：</a>' +
                                '<em>' + item.salesBefore + '</em>' +
                                '</div>' +
                                '</div>'
                            )
                            //点击关闭订单详情
                            $(".detail_1_top img").click(function () {
                                $(".heisemo").hide();
                                $(".detail_1").remove();
                            })
                            //用户选择非纯佣弹出二维码
                            if ($(".style2").hasClass("order_types_selected2")) {
                                $(".heisemo").show();
                                $(".detail_1").remove();
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
                        //订单中心的内容结束
                    })
                }
            } else if (errorCode == 1) {
                alert("请求出错！");
            } else {
                jugeToken(errorCode);
            }

        }
    })
}
if (userType == '1') {
    function closeD() {
        $(".heisemo").hide();
        $(".detail_1").remove();
    }

    function moreclick(indexOfferId) {
        var index = indexOfferId.split("_")[0];
        var offerId = indexOfferId.split("_")[1];
        var item = list[index];
        console.log(item)

        //点击出现订单详细内容                 
        //用户选择非纯佣弹出二维码
        if ($(".style2").hasClass("order_types_selected2")) {
            $(".heisemo").show();
            $(".detail_3").show();
            $(".detail_1").remove();
            $(".detail_2").remove();
            $(".heisemo").click(function () {
                $(".heisemo").hide();
                $(".detail_3").hide();
            })
        }
        else if ($(".style1").hasClass("order_types_selected1")) {
            $(".heisemo").show();
            $(".detail_1").show();
            var if_Snatch = {
                'token': token,
                'loginUserId': loginUserId,
                'offerId': offerId
            };

            $.ajax({
                url: globel + '/hone/web/pureOffer/ifSnatch',
                dataType: 'json',
                type: "post",
                contentType: "application/json",
                data: JSON.stringify(if_Snatch),
                success: function (data) {
                    console.log(data)
                    var ifSnatch = data.data.ifSnatch;
                    var ifSend = '';
                    if (item.ifSend == 1) {
                        ifSend = "是";
                    } else {
                        ifSend = "否";
                    }
                    $(".heisemo").append(
                        '<div class="detail_1">' +
                        '<div class="detail_1_top">' +
                        '<div class="detail_1_top_left">' + item.title + '</div>' +
                        '<img src="../img/close.png" alt="" style="cursor: pointer" onclick=closeD()>' +
                        '</div>' +
                        '<div class="list1">' +
                        '<a>商品类型：</a>' +
                        '<em>' + item.productType + '</em>' +
                        '</div>' +
                        '<div class="list2">' +
                        '<a>发布时间：</a>' +
                        '<em>' + item.createDate + '</em>' +
                        '</div>' +
                        '<div class="list3">' +
                        '<a>达人类型：</a>' +
                        '<div class="list3_1">' + item.starTag + '</div>' +
                        // <div class="list3_1">三农</div>
                        // <div class="list3_1">美女</div>
                        '</div>' +
                        '<div class="list4">' +
                        '<a>粉丝要求：</a>' +
                        '<em>' + item.fansNums + '万</em>' +
                        '</div>' +
                        '<div class="list5">' +
                        '<a>达人平台：</a>' +
                        '<em>' + item.starPlate + '</em>' +
                        '</div>' +
                        '<div class="list6">' +
                        '<a>店铺等级：</a>' +
                        '<em>' + item.shopLevel + '</em>' +
                        '</div>' +
                        '<div class="list7">' +
                        '<a>佣金比例：</a>' +
                        '<em>' + item.profitRatio + '%</em>' +
                        '</div>' +
                        '<div class="list8">' +
                        '<a>是否寄样：</a>' +
                        '<em>' + ifSend + '</em>' +
                        '</div>' +
                        '<div class="list9">' +
                        '<a>产品以往销量：</a>' +
                        '<em>' + item.salesBefore + '</em>' +
                        '</div>');

                    if (ifSnatch != "1") {
                        $(".detail_1").append(
                            '<div class="list10">' +
                            '<button class="layui-btn layui-btn-lg layui-btn-normal take_order"  onclick=take_order(' + JSON.stringify(index + '_' + offerId) + ') style="cursor: pointer">我想接单</button>' +
                            '</div>' +
                            '</div>'
                        )
                    } else {
                        $(".detail_1").append(
                            '<div class="list10">' +
                            '<button class="layui-btn layui-btn-lg layui-btn-normal take_order"   style="cursor: pointer" disabled>你已抢单</button>' +
                            '</div>' +
                            '</div>'
                        )
                    }
                }
            })
        }

    }
    //点击我想接单
    function take_order(indexId) {
        var index = indexId.split("_")[0];
        var id = indexId.split("_")[1];
        $(".detail_1").remove();
        $(".detail_2").show();
        $(".zhuti2_1_1 .more" + index).css("color", "grey");
        var qingdan = {
            'token': token,
            'loginUserId': loginUserId,
            'offerId': id
        };
        $.ajax({
            url: globel + '/hone/web/pureOffer/snatch',
            dataType: 'json',
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(qingdan),
            success: function (data) {
                console.log(data);
                var errorCode = data.errorCode;
                if (errorCode == 0) {
                    alert("您已接单，等待商家认证");
                    $(".detail_2").show();
                } else if (errorCode == 1) {
                    alert("请求出错！");
                    $(".detail_2").show();
                } else {
                    jugeToken(errorCode);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息   
                console.log(textStatus);
            }
        })
    }
}


function pageLimit(pageNumber, dataType, productId) {
    dataType_fun(dataType, productId, pageNumber);
}

function inputPageNumberPageLimit(dataType, productId) {
    var pageNumber = document.getElementById("inputNumber").value;
    globelPageNumber = pageNumber;
    dataType_fun(dataType, productId, pageNumber);
}

$(".time1").click(function () {
    // console.log("6666");
    dataType1 = '';
    dataType_fun(dataType1);
})
$(".time2").click(function () {
    // console.log("6666");
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

