function jugeToken(errorCode) {
    alert('登录失效，请重新登录！')
    if (errorCode == 2) {
        window.localStorage.removeItem('userData');
        window.location.href = 'https://www.hongonew.com';
    }
}