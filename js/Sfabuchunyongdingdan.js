var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token');
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM5MTI3MjYsInVzZXJJRCI6IjEiLCJpYXQiOjE1NjM3ODMxMjZ9.nudWazRFvdjtpeCksdML3nK5uqFba7YV1gAxYHEtNXI";

var order_content={
    "token": token,
    "title":$(".adver").next().val(),
    "productType":$(".pro_type").next().val(),
    "shopLevel":$(".store_level").next().val(),
    "salesBefore":$(".pro_sale").next().val(),
    "starPlate":$(".daren_level_demand").next().val(),
    "fansNums":$(".daren_fans_demand").next().val(),
    "starTag":$(".daren_style").next().val(),
    "ifSend":$(".send_sample").next().val(),
    "profitRatio":$(".com_rate").next().val(),
    "loginUserId":"fb8abfba4f62468598b162ac8417c28f"
}

$(".last_input1").click(function(){
    // console.log($(".adver").next().val());
    $.ajax({
    url:globel+'/hone/web/pureOffer/create',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(order_content),
    success:function(data){
        console.log(data);
        alert("创建订单成功");
        $("input").val("");
    }
})
})
