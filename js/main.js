$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
    });

    $("#cover").on("click", function () {
        $("header").removeClass("open");
    });

    $("#header-nav a").on("click", function () {
        $("header").removeClass("open");
    });
});