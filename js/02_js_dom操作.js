// DOM: Document Object Model(HTML文档)
document.querySelector("p").innerHTML = "我是DOM";
var arr = document.querySelectorAll("span");
arr.forEach(element => {
    console.log(element);
});
//购物车总价计算
var changeImg = document.querySelector(".buttonOn");
changeImg.onclick = function () {
    document.querySelector(".myImg").src = "images/meituan.png";
}


var a = document.querySelector(".pro_number").value;
console.log("数量" + a++);

document.querySelector(".s2").innerHTML;
console.log(document.querySelector(".s2").innerHTML);

console.log(document.querySelector(".s2").innerText);
// onmouseover 和 onmouseout
document.querySelector(".pwd").onmouseover = function(){
    document.querySelector(".password").type="text";
};

document.querySelector(".pwd").onmouseout = function(){
    document.querySelector(".password").type="password";
};

// 获得元素的内容
var ulelm = document.querySelector(".nav");
console.log(ulelm);
console.log(ulelm.firstElementChild.innerText);
console.log(ulelm.children[1].innerText,ulelm.children[2].innerText);

// document.querySelector(".workYear").onclick = function(){
//     console.log("111");
// }

// 事件冒泡：时间作用在那个元素身上，那个元素就冒出来
document.querySelector(".workSelect").onclick = function(event){
    var element = event.target;
    console.log(element);
    var workYearArr = document.querySelector(".workSelect").children;
    for(let i = 0;i<workYearArr.length;i++){
        workYearArr[i].className="workYear";
    }
    element.className="active workYear";
    console.log(element.innerText);
}