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
        console.log('商品类型列表', data.data.dictList);
        var list= data.data.dictList.dictType;
        $.each(list,function(index,item){
            
        })

    }
})