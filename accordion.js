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
        var icon = $(this).children("[accordion=icon]");

        $("[accordion=detail]").slideUp(); 
        rotateIcon($("[accordion=icon]"), 0);

        if (!nextDetail.is(":visible")) {
            nextDetail.slideDown();
            rotateIcon(icon, 180); 
        }
    });
});
