// document.querySelector(".btn1").onclick = function (){
//     //获得ul元素
//     var ulEle = document.querySelector(".pro_list");
//     //创建li元素
//     var liEle = '<li>\n' +
//         '            <a href="">老八杯</a>\n' +
//         '        </li>'
//     //添加li元素
//     ulEle.innerHTML += liEle;
// }

var proArray = [
    {
        "proName": "迪士尼（Disney）1儿童保温杯水杯",
        "proDesc": "暖暖的保温杯",
        "proPrice": "88"
    },
    {
        "proName": "迪士尼（Disney）2儿童保温杯水杯 ",
        "proDesc":"暖暖的保温杯",
        "proPrice": "77"
    },
    {
        "proName": "迪士尼（Disney）3儿童保温杯水杯",
        "proDesc":"暖暖的保温杯",
        "proPrice": "44"
    },
    {
        "proName": "迪士尼（Disney）4儿童保温杯水杯 ",
        "proDesc":"暖暖的保温杯",
        "proPrice": "66"
    }
];
document.querySelector(".btn1").onclick = function (){
    var ulEle = document.querySelector(".pro_list");
    for (let i = 0; i < proArray.length; i++) {
        ulEle.innerHTML += "<li>" +
            "<input type='text' class='searchKW'>" +
            proArray[i].proName +
            proArray[i].proDesc +
            proArray[i].proPrice +
            "</li>"
    }
}

