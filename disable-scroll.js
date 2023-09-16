$(document).ready(function () {

    // disable scroll
    $(`[data-scroll="disable"]`).click(function () {
        $("body").css("overflow", "hidden");
    });

    // enable scroll
    $(`[data-scroll="enable"]`).click(function () {
        $("body").css("overflow", "");
    });

});