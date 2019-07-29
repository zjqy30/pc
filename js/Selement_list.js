var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');

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
            // console.log('商品类型列表', data.data.dictList);
            var list = data.data.dictList;
            $.each(list, function (index, item) {
                var id = item.id
                //显示商家创建订单页面的订单类型
                $(".pro_type_list").append(
                    '<option value="' + id + '">' + item.dictValue + '</option>'
                )
            })
        } else if (errorCode == 1) {
            alert("请求你出错！");
        } else {
            jugeToken(errorCode);
        }
    }
})

var platType_list = {
    "token": token,
    "dictType": "platType "
}

$.ajax({
    url: globel + '/hone/backend/dict/list',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(platType_list),
    success: function (data) {
        var errorCode = data.errorCode;
        if (errorCode == 0) {
            var list = data.data.dictList;
            $.each(list, function (index, item) {
                var id = item.id

                //显示商家创建订单页面的平台要求
                $(".daren_level_demand_list").append(
                    '<option value="' + id + '">' + item.dictValue + '</option>'
                )
            })
        } else if (errorCode == 1) {
            alert("请求出错！");
        } else {
            jugeToken(errorCode);
        }
    }
})


var label_list = {
    "token": token,
    "dictType": "label "
}

$.ajax({
    url: globel + '/hone/backend/dict/list',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(label_list),
    success: function (data) {
        var errorCode = data.errorCode;
        if (errorCode == 0) {
            var list = data.data.dictList;
            $.each(list, function (index, item) {
                var id = item.id
                //显示商家创建订单页面的网红标签
                $(".daren_style_list").append(
                    '<option value="' + id + '">' + item.dictValue + '</option>'
                )
            })
        } else if (errorCode == 1) {
            alert("请求出错！");
        } else {
            jugeToken(errorCode);
        }

    }
})




