$(document).ready(function () {
    // change URL on TAB click
    $('a[role="tab"]').click(function (e) {
        var tabID = $(this).attr('id');
        history.pushState(null, null, '#' + tabID);
    });

    // go to TAB based on URL
    var hash = window.location.hash;
    if (hash) {
        var targetElement = $(hash);
        var offsetElement = targetElement.closest('[data-offset]');
        var offset = offsetElement.length ? offsetElement.data('offset') : 0;
        $('html, body').animate({
            scrollTop: targetElement.offset().top - offset
        }, 0);
        targetElement.click();
    }

});