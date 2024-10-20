$('[accordion-icon]').removeClass('is-open');

$('[accordion-trigger]').each(function () {
    var speed = parseInt($(this).attr('accordion-trigger')) || 300;
    $(this).next('[accordion-content]').slideUp();

    $(this).click(function () {
        var $content = $(this).next('[accordion-content]');
        var $icon = $(this).find('[accordion-icon]');
        $('[accordion-content]').not($content).slideUp(speed).prev('[accordion-trigger]').find('[accordion-icon]').removeClass('is-open');
        $content.stop(true, true).slideToggle(speed, function() {
            $icon.toggleClass('is-open');
        });
    });
});