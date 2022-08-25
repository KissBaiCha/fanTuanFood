layui.use(['form', 'util', 'laydate'], function(){
    var form = layui.form;
    var layer = layui.layer;
    var util = layui.util;


});
var usernameElement = document.querySelector(".username");
usernameElement.onblur = checkusername;
function checkusername(){
    username = usernameElement.value;
    if(username == null || username == ""){
        document.querySelector(".login-msg").innerText = "用户名不能为空";
        return false;
    }else if(!/^[0-9A-Za-z]{6,12}$/.test(username)){
        document.querySelector(".login-msg").innerText = "只能输入数字和字母";
        return false;
    }
    else{
        document.querySelector(".login-msg").innerText = "";
        return true;
    }
}