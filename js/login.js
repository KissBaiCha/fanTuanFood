layui.use(['form', 'util', 'laydate'], function(){
    var form = layui.form;
    var layer = layui.layer;
    var util = layui.util;


});
var usernameElement = document.querySelector(".userTel");
usernameElement.onblur = checkusername;
function checkusername(){
    username = usernameElement.value;
    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(username)){
        document.querySelector(".login-msg").innerText = "请输入正确的邮箱";
        return false;
    }else{
        document.querySelector(".login-msg").innerText = "";
        return true;
    }
}