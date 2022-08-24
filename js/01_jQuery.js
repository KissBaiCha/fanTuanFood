
/*
    选择器
    $(".s1");
    $("#s2")
    $("div");
    $(".nav li").eq(0) : 获得第0个li元素
    $(".nav").children()： 所有的子元素
    ele.parent() : 父元素
    ele.prev(): 前一个兄弟元素
    ele.next(): 下一个兄弟元素
    ele.siblings(): 所有的兄弟元素
    ele.first : 第一个元素
    ele.last : 最后一个元素
 */
var ulEle = $(".nav li");
console.log(ulEle.eq(1).text())
//
var value = $(".proCount").val(5);
console.log(value);

var proImg = $(".imgTip").attr("src");
console.log(proImg);
$(".imgTip").attr("src","images/mylogo.png")


$(".my-btn").click(function(){
    console.log(123);
    $(this).css("background-color",'yellow');
    $(".div1").toggle();
})