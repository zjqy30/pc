window.onload = function(){
    // 根据手机号以及验证码校验做显隐
    $('.pc_red').hide();

    // 
    var websocket = null;
    var addr = 'ws://192.168.0.166:8080/hone/web/websocket/';

    // 如果window.localStorage中的userData有数据且token未过期，处登录状态
    // 如果window.localStorage中的userData无数据，需要登录
    if(window.localStorage.getItem('userData') == null){
        // 无用户数据，登录
        console.log('111');
        $('.pc_login_pop').show();
        $('.zhezhao').show();
    }

    // 初始化二维码
    $('#qrcode').html('');
    $('#scanCode').click(function(){
            // 点击二维码登录时，手机登录域被隐藏
            $('.pc_phone_login').hide();
            $('.pc_minicode_login').show();
        // 时间戳time
        var timeStamp = getTimeStamp(); 
        console.log(timeStamp);

        // 建立连接
        setSocket(timeStamp);
        // 根据时间戳实时获取二维码
        getCode(timeStamp);
    })

// 获取时间戳
function getTimeStamp() {
  var tmp = Date.parse( new Date() ).toString();
  tmp = tmp.substr(0,10);
  return tmp;
}

// 创建二维码
function getCode(value){
    new QRCode(document.getElementById("qrcode"), value);  // 设置要生成二维码的链接
}

// 建立websocket连接
function setSocket(time){
// var ue = UE.getEditor('editor');


    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
        websocket = new WebSocket(addr+time+"/123456");
    }
    else {
        alert("对不起！你的浏览器不支持webSocket")
    }

    //连接发生错误的回调方法
    websocket.onerror = function () {
        setMessageInnerHTML("error");
    };

    //连接成功建立的回调方法
    websocket.onopen = function (event) {
        console.log("连接成功");
    };

    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        // setMessageInnerHTML(event.data);
        console.error(event.data);
        var str=event.data;
        console.log(str+'这是返回的数据');
         // 1001链接成功，1002扫码成功
         if(str.indexOf("1002") != -1){
           // 首页，保存用户的数据
           window.localStorage.setItem('userData',str);
           // 关闭pop
            $('.pc_login_pop').hide();
            $('.zhezhao').hide();
           // 断开连接
           closeWebSocket();

       }

   };
    //连接关闭的回调方法
    websocket.onclose = function () {
		// setMessageInnerHTML('登录成功');	
    };

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，
    // 防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        var is = confirm("确定关闭窗口？");
        if (is){
            websocket.close();
        }
    };
}
// 将消息显示在网页上
function setMessageInnerHTML(innerHTML) {
   alert(innerHTML);
};

//关闭连接
function closeWebSocket() {
    websocket.close();
    console.error('断开连接');
}


}