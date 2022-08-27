var pwd = $(".myForm :password");
pwd.on({
    focus:function (){
        var left = $(".left-girl img");
        var right = $(".right-girl img");
        left.attr("src","../../images/login_register/left-close.png");
        right.attr("src","../../images/login_register/right-close.png")
    },
    blur:function (){
        var left = $(".left-girl img");
        var right = $(".right-girl img");
        left.attr("src","../../images/login_register/left.png");
        right.attr("src","../../images/login_register/right.png")
    }
})

// layui.use('layer', function(){
//     var layer = layui.layer;
//     layer.open({type: 5});
// });

layer.open({
    type: 1,
    content: '传入任意的文本或html', //这里content是一个普通的String
    skin: 'demo-class'
});




