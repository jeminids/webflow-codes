$(document).ready(function () {
    $("[accordion=detail]").slideUp()
    $("[accordion=header]").click(function () {
        $("[accordion=detail]").slideUp()
        $(this).next("[accordion=detail]").slideDown()
    });
});
