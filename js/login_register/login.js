layui.use(['form', 'util', 'laydate'], function(){
    var form = layui.form;
    var layer = layui.layer;
    var util = layui.util;


});
// var usernameElement = document.querySelector(".userTel");
// usernameElement.onblur = checkusername;
// function checkusername(){
//     username = usernameElement.value;
//     if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(username)){
//         document.querySelector(".login_register-msg").innerText = "请输入正确的邮箱";
//         return false;
//     }else{
//         document.querySelector(".login_register-msg").innerText = "";
//         return true;
//     }
// }

$(".get-verifyCodeBtn").click(function (){
    $(".get-verifyCodeBtn").html("60s")
    layer.msg('验证码发送成功');
})
//^[1][3,4,5,7,8][0-9]{9}$ 电话号
$(".userTel").blur(function (){
   let userTel = $(".userTel").val();
   if(userTel === "" || !/^[1][3,4,5,7,8][0-9]{9}$/.test(userTel)){
       layer.msg('请输入合法手机号');
       return false;
   }
   return true;
})
