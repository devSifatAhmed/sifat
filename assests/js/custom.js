$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("header").addClass("active");
        $(".scroll-btn").addClass("active");
        $(".nav-bar nav").addClass("sticky");
    } else {
        $("header").removeClass("active");
        $(".scroll-btn").removeClass("active");
        $(".nav-bar nav").removeClass("sticky");
    }
});



$(document).ready(function () {





    $("section").scrollWatchMapTo(".nav-list > li");


    $(".nav-bar nav ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".three-dot-btn").removeClass("active");
        $(".nav-bar nav").removeClass("active");
    });



    $(".three-dot-btn").click(function () {
        $(this).toggleClass("active");
        $(".nav-bar nav").toggleClass("active");
    });



    $(".selector-box button").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".portfolio-card").addClass("active");
        } else {
            $(".portfolio-card").not("." + value).removeClass("active");
            $(".portfolio-card").filter("." + value).addClass("active");
        }
    });
    $(".selector-box button").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".portfolio-card .portfolio-inner").click(function () {
        $(this).next().addClass("active").siblings().removeClass("active");
    });
    $(".close-outer-img").click(function () {
        $(this).parent().removeClass("active");
    });
    $("#form .field").click(function () {
        $(this).addClass("active");
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });



    $("a, img, h1, h2, h3, h4, h5, h6, p, span, label, li, i, button, input").hover(
        function () {
            $(".cursor").addClass("active");
        },
        function () {
            $(".cursor").removeClass("active")
        }
    );
});





// cursor event start
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
// cursor event end