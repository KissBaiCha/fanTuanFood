$(".username").blur(checkUserName);
function checkUserName(){
    let userName = $(".username").val();
    if(userName === "" || userName == null){
        $(".usertip").text("用户名不能为空");
        return false;
    }else if(!/^[0-9A-Za-z]{6,12}$/.test(userName)){
        $(".usertip").text("只能输入数字和字母");
        return false;
    }else{
        $(".usertip").text("");
        return true;
    }
}

$(".submit-btn").click(getFormVal);
function getFormVal(){
    let userName = $(".username").val();
    let userPwd = $(".userpwd").val();
    let userMail = $(".usermail").val();
    let userTel = $(".usertel").val();
    console.log(userName);
    console.log(userPwd);
    console.log(userMail);
    console.log(userTel);
    //性别
    let userGender = $(".genderBtn:checked").val();
    let userIdCard = $(".idCard:checked").val();
    console.log(userGender);
    console.log(userIdCard);
    var food = "";
    var foodArr = $(".radiobtn:checked");
    foodArr.each(function (){
        food += this.value;
    })
    console.log(food);
    return false;
}
$(".foodSelectAllBtn").click(function (){
    $(".food").each(function (){
        this.checked = $(".foodSelectAllBtn").is(":checked");
    })
})