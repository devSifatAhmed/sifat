$(document).ready(function(){
    $(".three-dot-btn").click(function(){
        $(".three-dot-btn, #side-bar, .logo, .side-bar-admin-name, .side-bar-menu, #header, .display").toggleClass("active");
    });
    $(".side-bar-menu > ul > li:first-child").addClass("active");
    $(".side-bar-menu > ul > li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".header-profile").click(function(){
        $(this).toggleClass("active");
    });
    $(".mode").click(function(){
        $(this).toggleClass("active");
        $("body").toggleClass("active");
    });

    $("#about").addClass("show");
    $(".home").click(function(){
        $(".display").removeClass("show");
        $("#home").addClass("show");
    })
    $(".about").click(function(){
        $(".display").removeClass("show");
        $("#about").addClass("show");
    })
    $(".service").click(function(){
        $(".display").removeClass("show");
        $("#service").addClass("show");
    })
    $(".showcase").click(function(){
        $(".display").removeClass("show");
        $("#showcase").addClass("show");
    })
    $(".testi").click(function(){
        $(".display").removeClass("show");
        $("#testimonial").addClass("show");
    })
    $(".social").click(function(){
        $(".display").removeClass("show");
        $("#social").addClass("show");
    })
    $(".messages").click(function(){
        $(".display").removeClass("show");
        $("#messages").addClass("show");
    })
});