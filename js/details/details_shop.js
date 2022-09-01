document.querySelector(".dingwei").onclick=function(){
    document.querySelector(".dw").style.display = "block";
    document.querySelector(".cover").style.display = "block";
    document.querySelector(".cover").style.height = screen.height +'px';
}

layui.use(['carousel', 'form'], function () {
    var carousel = layui.carousel
        , form = layui.form;

    var ins3 = carousel.render({
        elem: '#test3'
        , width: '336.4px'
        , height: '260px'
    });
    //图片轮播

})
var map = new AMap.Map('container', {
       
    zoom:18, //初始化地图层级
    center: [120.693277,31.297477] //初始化地图中心点
});
var marker = new AMap.Marker({ 
    map: map,
    position: [120.693277, 31.297477],
    icon: '../images/map-location-icon.png' ,
    offset: new AMap.Pixel(-13, -30)
});
