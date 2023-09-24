$(document).ready(function () {
// tab linking from another tab
$('[data-tab="content"]').find('[data-tab]').each(function () {
    $(this).click(function (e) {
        var tabValue = $(this).attr('data-tab');
        var tabIndex = parseInt(tabValue) - 1;
        $('[data-tab="menu"] a:eq(' + tabIndex + ')').click();
    });
});

// go to the tab based on the url #tabx
var url = window.location.href;
var match = url.match(/#tab(\d+)/);
if (match) {
    var tabNumber = parseInt(match[1]);
    $('html, body').animate({
        scrollTop: $('[data-tab="content"]').offset().top - 120
    }, 'slow');
    $('[data-tab="menu"] a:eq(' + (tabNumber - 1) + ')').click();
}
}); 