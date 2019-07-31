window.onload = function () {
    // var globel = 'http://192.168.0.166:8080';
    // 根据手机号以及验证码校验做显隐
    $('.pc_red').hide();

    console.log(returnCitySN);
    var websocket = null;
    //测试
    // var addr = 'ws://192.168.0.166:8080/hone/web/websocket/';

     // 正式
            var addr = 'wss://hongonew.com/hone/web/websocket/';

    // 本地
    var addr_phone = globel+'/hone/web/userBasic/loginByPhone';
    var addr_code = globel+'/hone/pc/website/message/sendSms';
    var userInfo = '';

    // 如果window.localStorage中的userData有数据且token未过期，处登录状态
    // 如果window.localStorage中的userData无数据，需要登录
    if (window.localStorage.getItem('userData') == null) {
        // 无用户数据，登录
        console.log('111');
        $('.pc_login_pop').show();
        $('.zhezhao').show();
    } else {
        userInfo = window.localStorage.getItem('userData');
        var userInfoObj = JSON.parse(userInfo);
        console.log(userInfoObj);
        if (userInfoObj.userType == '0') {
            // 普通
            alert('请前往小程序进行身份认证！')
        } else if (userInfoObj.userType == '1') {
            if (window.localStorage.getItem('ifJumpIndex') == null) {
                // 网红
                window.location.href = 'pages/wdingdanzhongxin.html';
            }else{
                window.localStorage.removeItem('ifJumpIndex');
            }

        } else if (userInfoObj.userType == '2') {
            // 商家
            if(window.localStorage.getItem('ifJumpIndex') == null){
                window.location.href = 'pages/sdingdanzhongxin.html';
            }else{
                window.localStorage.removeItem('ifJumpIndex');
            } 
        }
    }


    var phone_num=null;

$('#getCode').click(function () {
        
        //获取手机验证码
    phone_num=$(".pc_input").val();
         // 获取当前年月日
    var curDate = new Date();
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth() + 1;
    var curDay = curDate.getDate();

    if (curMonth >= 1 && curMonth <= 9) {
        curMonth = "0" + curMonth;
    }
    if (curDay >= 0 && curDay <= 9) {
        curDay = "0" + curDay;
    }


    var str = curYear + "-" + curMonth + "-" + curDay + ':' + phone_num + ':' + 'hongone888';
    var md5phone = $.md5(str);
    
    var veri_code={
        'phoneNo':phone_num,
        'smsSign':md5phone,
        'type':"3"
    };


    $.ajax({
        url: addr_code,
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(veri_code),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("发送成功！")
            } else if (data.errorCode == 1) {
                alert("发送失败！")
            }
            //window.location.reload()//实时刷新
        }
    })

})

// 手机验证码登录
$('#login').click(function () {

    var code=$(".pc_input_code").val();

    var veri_code={
        'phoneNo':phone_num,
        'code':code
    };

   
    $.ajax({
        url: addr_phone,
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(veri_code),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("发送成功！");
                var list=data.data;
                window.localStorage.setItem('userData', list);
                window.localStorage.setItem('token', list.token);
                window.localStorage.setItem('userId', list.userId);
                window.localStorage.setItem('userType', list.userType);
                window.localStorage.setItem('headPic', list.headPic);
                window.localStorage.setItem('wxName', list.wxName);
                if (list.userType == '0') {
                    // 普通
                    alert('请前往小程序进行身份认证！')
                } else if (list.userType == '1') {
                    // 网红
                    window.location.href = 'pages/wdingdanzhongxin.html';

                } else if (list.userType == '2') {
                    // 商家
                    window.location.href = 'pages/sdingdanzhongxin.html';
                }
             
            } else if (data.errorCode == 1) {
                alert("发送失败！")
            }
            //window.location.reload()//实时刷新
        }
    })
})




    // 初始化二维码
    $('#qrcode').html('');
    $('#scanCode').click(function () {
        // 点击二维码登录时，手机登录域被隐藏
        $('.pc_phone_login').hide();
        $('.pc_minicode_login').show();
        // 时间戳time
        var timeStamp = getTimeStamp();
        // console.log(timeStamp);

        // 建立连接
        setSocket(timeStamp);
        // 根据时间戳实时获取二维码
        getCode(timeStamp);
    })

    // 获取时间戳
    function getTimeStamp() {
        var tmp = Date.parse(new Date()).toString();
        tmp = tmp.substr(0, 10);
        return tmp;
    }

    // 创建二维码
    function getCode(value) {
        new QRCode(document.getElementById("qrcode"), value);  // 设置要生成二维码的链接
    }

    // 建立websocket连接
    function setSocket(time) {
        // var ue = UE.getEditor('editor');


        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {

            websocket = new WebSocket(addr + time + "/"+returnCitySN.cip);
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

            // console.error(JSON.stringify(event) + 'new');
            var str = event.data;
            console.log(str + '这是返回的数据');

            // 1001链接成功，1002扫码成功
            if (str.indexOf("1002") != -1) {
                console.error(typeof str);
                var userInfoObj = JSON.parse(str);
                console.log(userInfoObj);
                // 首页，保存用户的数据
                window.localStorage.setItem('userData', str);
                window.localStorage.setItem('token', userInfoObj.token);
                window.localStorage.setItem('userId', userInfoObj.userId);
                window.localStorage.setItem('userType', userInfoObj.userType);
                window.localStorage.setItem('headPic', userInfoObj.headPic);
                window.localStorage.setItem('wxName', userInfoObj.wxName);

                console.log(JSON.stringify(userInfoObj));
                if (userInfoObj.userType == '0') {
                    // 普通

                    alert('请前往小程序进行身份认证！')
                } else if (userInfoObj.userType == '1') {
                    // 网红
                    window.location.href = 'pages/wdingdanzhongxin.html';

                } else if (userInfoObj.userType == '2') {
                    // 商家
                    window.location.href = 'pages/sdingdanzhongxin.html';
                }

                // 关闭pop
                $('.pc_login_pop').hide();
                $('.zhezhao').hide();
                // 断开连接
                closeWebSocket();

            } else if (str.indexOf("1003") != -1) {
                // 二维码失效
                alert(userInfoObj.message);
                // window.location.reload();
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
            if (is) {
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