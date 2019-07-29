$(document).ready(function () {
    $(".login_out").click(function () {
        window.localStorage.removeItem('userData');
        window.localStorage.removeItem('headPic');
        window.localStorage.removeItem('wxName');
        window.parent.location.href = '../index.html';
    })
})
