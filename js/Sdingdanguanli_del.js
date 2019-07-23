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
            $(".table_style").append(
                '<tbody>'+
                   ' <tr>'+
                        '<td>' + item.title + '</td>' +
                        '<td>' + item.productType + '</td>' +
                        '<td>' + item.starPlate + '</td>' +
                        '<td>' + item.fansNums + '</td>' +
                        '<td>' + item.createDate + '</td>' +
                        '<td class="more_del" style="color:rgba(24,144,255,1);">' +
                           ' <a style="list-style-type: none; color: rgba(24,144,255,1);" class="more1">更多资料|</a>' +
                            '<a style="list-style-type: none; color: rgba(24,144,255,1);">删除</a> ' +
                        '</td>' +
                    '</tr>' +
                '</tbody>'
            )

console.log( $(".more_del a:eq(0)"));
            //点击出现订单详细内容
            $(".more_del .more1").click(function(){
                $(".heisemo").show();
               })
                 //点击关闭订单详情
                 $(".detail_1_top img").click(function () {
                    $(".heisemo").hide();
                })
            //订单中心的内容结束



        })
    }
})