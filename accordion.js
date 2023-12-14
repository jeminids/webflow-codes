$(document).ready(function () {
    function rotateIcon(icon, degrees) {
        icon.animate({ borderSpacing: degrees }, {
            step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'fast'
        }, 'linear');
    }

    $("[accordion=detail]").slideUp();
    $("[accordion=header]").click(function () {
        var nextDetail = $(this).next("[accordion=detail]");
        if (nextDetail.is(":visible")) {
            return;
        }
        $("[accordion=detail]").slideUp();
        nextDetail.slideDown();
        var icon = $(this).children("[accordion=icon]");
        rotateIcon($("[accordion=icon]"), 0);
        rotateIcon(icon, 180);
    });
});
