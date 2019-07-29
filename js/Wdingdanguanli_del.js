//网红订单管理

var globel = 'http://192.168.0.166:8080';
var token = window.localStorage.getItem('token');
var keyword = '';
var fansNumsOrderBy = '';
var dateOrderBy = '';
var loginUserId = window.localStorage.getItem("userId");
var headPic = window.localStorage.getItem("headPic");
var wxName = window.localStorage.getItem("wxName");
var userType = window.localStorage.getItem("userType");

var id = '';

//如果登陆显示微信头像和昵称
if (headPic && wxName) {
    if (userType == '1') {
        $(".shouyetouxiang").attr("src", headPic);
        $(".nicheng").html(wxName);
    }
}

// 传关键字的函数
getList();

// 粉丝排序
$(".reorder1").click(function () {
    var pageNumber= '1';
    // 日期初始化
    dateOrderBy = "";
    $(".second_couple .sanjiao3").removeClass("green1").addClass("white1");
    $(".second_couple .sanjiao4").removeClass("green2").addClass("white2");

    if (fansNumsOrderBy == 'asc') {
        fansNumsOrderBy = 'desc';
        $(".first_couple .sanjiao2").removeClass("white2").addClass("green2");
        $(".first_couple .sanjiao1").removeClass("green1").addClass("white1");
    } else {
        fansNumsOrderBy = 'asc';
        $(".first_couple .sanjiao1").removeClass("white1").addClass("green1");
        $(".first_couple .sanjiao2").removeClass("green2").addClass("white2");
    }
    getList(pageNumber);
})

// 日期排序
$(".reorder2").click(function () {
    var pageNumber= '1';
    // 粉丝的初始化
    fansNumsOrderBy = "";
    $(".first_couple .sanjiao1").removeClass("green1").addClass("white1");
    $(".first_couple .sanjiao2").removeClass("green2").addClass("white2");

    if (dateOrderBy == 'asc') {
        dateOrderBy = 'desc';
        $(".second_couple .sanjiao4").removeClass("white2").addClass("green2");
        $(".second_couple .sanjiao3").removeClass("green1").addClass("white1");
    } else {
        dateOrderBy = 'asc';
        $(".second_couple .sanjiao3").removeClass("white1").addClass("green1");
        $(".second_couple .sanjiao4").removeClass("green2").addClass("white2");
    }
    getList(pageNumber);
})

var globelPageNumber = "1";

function getList(pageNumber) {

    if (pageNumber == null) {
        pageNumber = "1";
    }
    var pageSize = "11";

    var manage_list = {
        'token': token,
        'pageNumber': pageNumber,
        'pageSize': pageSize,
        'loginUserId': loginUserId,
        'keys': keyword,
        "fansNumsOrderBy": fansNumsOrderBy,
        "dateOrderBy": dateOrderBy
    };
    $.ajax({
        url: globel + '/hone/web/pureOffer/snatchList',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(manage_list),
        success: function (data) {
            console.log(data);
            var errorCode = data.errorCode;
            if (errorCode == 0) {
                console.log('网红订单列表', data.data.pageData.list);
                //总信息条数
                var totalCount = data.data.pageData.totalCount;
                console.log(totalCount);

                if (totalCount == 0) {
                    totalPage = 1;
                } else {
                    var totalPage = totalCount % pageSize == 0 ? totalCount / Number(pageSize) : (Math.ceil(totalCount / Number(pageSize)));
                }


                $(".paging").html("");

                if (pageNumber != 1) {
                    $(".paging").append('<div class="page page_select" onclick=pageLimit(' + (Number(pageNumber) - 1) + ',' + keyword + ',' + dateOrderBy + ',' + fansNumsOrderBy + ') ><img src="../img/last.png" alt=""></div>');
                } else {
                    $(".paging").append('<div class="page page_unselect" ><img src="../img/last.png" alt=""></div>');
                }

                if (keyword == "" || keyword == undefined) {
                    keyword = null;
                }
                if (dateOrderBy == "" || dateOrderBy == undefined) {
                    dateOrderBy = null;
                }
                if (fansNumsOrderBy == "" || fansNumsOrderBy == undefined) {
                    fansNumsOrderBy = null;
                }



                $(".paging").append('<div class="page page_select page_select_word" >' + pageNumber + '/' + totalPage + '</div>');

                if (pageNumber != totalPage) {
                    $(".paging").append('<div class="page page_select" onclick=pageLimit(' + (Number(pageNumber) + 1) + ')><img src="../img/next.png" alt=""></div>');
                } else {
                    $(".paging").append('<div class="page page_unselect" ><img src="../img/next.png" alt=""></div>');
                }

                $(".paging").append('<div class="page page_unselect" style="border: 1px solid transparent" ><input type="text" id="inputNumber" value=' + globelPageNumber + ' style="width:60%;height:90%"  ></input>');
                $(".paging").append('<div class="page page_select page_select_word" onclick=inputPageNumberPageLimit(' + keyword + ',' + dateOrderBy + ',' + fansNumsOrderBy + ')>跳转</div>')
                console.log("总页数=" + totalPage);

                var list = data.data.pageData.list;
                //先把tbody清空
                $("tbody").html('');
                //遍历list
                $.each(list, function (index, item) {
                    //商家订单管理
                    id = item.id;
                    var starTag = item.starTag;
                    $(".table_style").append(
                        '<tbody>' +
                        ' <tr>' +
                        '<td id="' + id + '">' + item.title + '</td>' +
                        '<td>' + item.productType + '</td>' +
                        '<td>' + item.starPlate + '</td>' +
                        '<td>' + item.fansNums + '万</td>' +
                        '<td>' + item.createDate + '</td>' +
                        '<td class="more_del" style="color:rgba(24,144,255,1);">' +
                        ' <a style="list-style-type: none; color: rgba(24,144,255,1);cursor: pointer" class="more1 more0' + index + '" onclick=fun(' + item + ')>更多资料|</a>' +
                        '<a data-method="confirmTrans" style="list-style-type: none; color: rgba(24,144,255,1);cursor: pointer" class="more1' + index + '" onclick=del_order(' + id + ') >删除</a> ' +
                        '</td>' +
                        '</tr>' +
                        '</tbody>'
                    )
                    //点击更多资料显示弹框
                    $(".more0" + index).click(function () {
                        var ifSend;
                        if (item.ifSend == 1) {
                            ifSend = "是";
                        } else {
                            ifSend = "否";
                        }

                        $(".heisemo").append(
                            '<div class="detail_1">' +
                            '<div class="detail_1_top">' +
                            '<div class="detail_1_top_left">' + item.title + '</div>' +
                            '<img src="../img/close.png" alt="">' +
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
                            '<div class="list3_1">' + starTag + '</div>' +
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
                    })


                    //点击删除纯佣订单
                    // alert(id+"哈哈");

                    $(".more1" + index).click(function () {
                     
                        var del_data = {
                            'token': token,
                            'loginUserId': loginUserId,
                            'offerId': list[index].id
                        }
                        $.ajax({
                            url: globel + "/hone/web/pureOffer/delSnatch",
                            dataType: 'json',
                            type: "post",
                            contentType: "application/json",
                            data: JSON.stringify(del_data),
                            success: function (data) {
                                if (data.errorCode == 0) {
                                    alert("删除成功！")
                                } else if (data.errorCode == 1) {
                                    alert("删除失败！")
                                }
                                window.location.reload()//实时刷新
                            }
                        })
                    })

                    //点击出现订单详细内容
                    $(".more_del .more1").click(function () {
                        $(".heisemo").show();
                    })
                    //点击关闭订单详情
                    $(".detail_1_top img").click(function () {
                        $(".heisemo").hide();
                    })
                    //订单中心的内容结束
                })
            } else if (errorCode == 1) {
                alert("请求出错！");
            } else {
                jugeToken(errorCode);
            }
        }
    })
}

function pageLimit(pageNumber) {
    getList(pageNumber);

}

function inputPageNumberPageLimit(keyword, dateOrderBy, fansNumsOrderBy) {
    var pageNumber = document.getElementById("inputNumber").value;
    globelPageNumber = pageNumber;
    getList(kpageNumber);
}

//判断模糊查询，当点击按钮时，给函数传关键字
$(".search_button").click(function () {
    keyword = $(".search").val();
    // console.log(listData+'1111');
    var pageNumber = '1';
    getList(pageNumber);

})


