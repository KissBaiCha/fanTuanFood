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
},pwd)