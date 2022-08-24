document.querySelector(".pro-list").onclick = function (event) {
    var ele = event.target;
    var eleName = ele.nodeName;
    if (eleName != "A" ) return;
    var countEle = ele.parentElement.children[1];
    if (ele.innerText == '+') {
        ++countEle.value;
    }
    if (ele.innerText == '-') {
        if (countEle.value == 1) return;
        --countEle.value;
    }
    eleParent = ele.parentElement.parentElement;
    var unitPrice = parseFloat(eleParent.previousElementSibling.children[1].innerText);
    eleParent.nextElementSibling.children[1].innerText = countEle.value * unitPrice;
    zongjia();
}




// 全选按钮计算价格
var proSelectAll = document.querySelector(".selectAllTip");//获取 全选按钮元素对象
proSelectAll.onclick = proSelectAllBtn;

function proSelectAllBtn() {
    var pro = document.querySelectorAll("input[name = 'select']");
    for (let index = 0; index < pro.length; index++) {
        pro[index].checked = proSelectAll.checked;
    }
    zongjia();
}

// 计算总价总商品数量方法
function zongjia() {
    var totalCount = 0;
    var totalPrice = 0;
    // 获得所以有已选中的商品checkbox.checked
    var allcheckBtn = document.querySelectorAll(".select-btn")
    for (let i = 0; i < allcheckBtn.length; i++) {
        var checkBtn = allcheckBtn[i];
        if (checkBtn.checked) {
            var liArr = checkBtn.parentElement.parentElement.children;

            var count = liArr[3].firstElementChild.children[1];

            var xiaoji = liArr[4].children[1];

            totalCount += parseInt(count.value);

            totalPrice += parseFloat(xiaoji.innerText);

        }
    }
    var price = document.querySelector(".price-sum");
    price.firstElementChild.children[1].innerText =parseFloat(totalPrice).toFixed(2);

    price.nextElementSibling.children[1].innerText = totalCount;
    // 获得所有商品的数量累加
    // 获得所有商品的小计累加
    // 修改地步已选中商品数量
    // 修改总价
}
