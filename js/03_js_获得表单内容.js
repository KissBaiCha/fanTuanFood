
// document.querySelector(".submit-btn").onclick = function(){
//     return  checkusername() && checkpwd() && checktel() && checkmail() ;
// }


var usernameElement = document.querySelector(".username");
usernameElement.onblur = checkusername;
function checkusername(){
    username = usernameElement.value;
    if(username == null || username == ""){
        document.querySelector(".usertip").innerText = "用户名不能为空";
        return false;
    }else if(!/^[0-9A-Za-z]{6,12}$/.test(username)){
        document.querySelector(".usertip").innerText = "只能输入数字和字母";
        return false;
    }
    else{
        document.querySelector(".usertip").innerText = "*";
        return true;
    }
}


var userpwdEle = document.querySelector(".userpwd");
userpwdEle.onblur = checkpwd;
function checkpwd(){
    userpwd = userpwdEle.value;
    if(userpwd == null || userpwd == ""){
        document.querySelector(".userpwdtip").innerText = "密码不能为空";
        return false;
    }else{
        document.querySelector(".userpwdtip").innerText = "*";
        return true;
    }
}

var usermailtipEle = document.querySelector(".usermail");
usermailtipEle.onblur = checkmail;
function checkmail(){
    usermail = usermailtipEle.value;
    if(usermail == null || usermail == ""){
        document.querySelector(".usermailtip").innerText = "请输入正确邮箱";
        return false;
    }else{
        document.querySelector(".usermailtip").innerText = "*";
        return true;
    }
}

var usertelEle = document.querySelector(".usertel");
usertelEle.onblur = checktel;
function checktel(){
    usertel = usertelEle.value;
    if(usertel == null || usertel == ""){
        document.querySelector(".userteltip").innerText = "请输入正确的手机号";
        return false;
    }else{
        document.querySelector(".userteltip").innerText = "*";
        return true;
    }
}
document.querySelector(".submit-btn").onclick = getFormValue;
function getFormValue(){
    var username = document.querySelector(".username").value;
    var userpwd = document.querySelector(".userpwd").value;
    var usermail = document.querySelector(".usermail").value;
    var usertel = document.querySelector(".usertel").value;
    var gender;  
    var genderArr = document.querySelectorAll(".genderBtn");
    for (let index = 0; index < genderArr.length; index++) {
        if(genderArr[index].checked)
        gender = genderArr[index].value;
    }
    var idCard;
    var idCardArr = document.querySelectorAll("input[name = 'idcard']");
    for (let index = 0; index < idCardArr.length; index++) {
        if(idCardArr[index].checked)
        idCard = idCardArr[index].value;
    }
    var foodStr = "";
    var foods = document.querySelectorAll("input[name = 'food']");   
    for (let index = 0; index < foods.length; index++) {
        if(foods[index].checked)
        foodStr += foods[index].value;
    }
    console.log("username:" + username);
    console.log("userpwd:" + userpwd);
    console.log("usermail:" + usermail);
    console.log("gender:" + gender);
    console.log("usertel:" + usertel);
    console.log("idCard:" + idCard);
    console.log("foodStr:" + foodStr);
    return false;
}
// 
var foodSelectAll = document.querySelector(".foodSelectAllBtn");
foodSelectAll.onclick = foodSelectAllBtn;

function foodSelectAllBtn(){
    var foods = document.querySelectorAll("input[name = 'food']");   
    for (let index = 0; index < foods.length; index++) {
        foods[index].checked = foodSelectAll.checked;
    }  
}