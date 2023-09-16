$(document).ready(function () {
    // iterate through elements with data attributes
    $('[data-popup^="open-"]').each(function () {
        const index = $(this).attr('data-popup').replace('open-', '');

        // open popup
        $(this).click(function () {
            $(`[data-popup="item-${index}"]`).fadeIn();
            $("body").css("overflow", "hidden");
        });

        // close popup
        $(`[data-popup="close-${index}"]`).click(function () {
            $(`[data-popup="item-${index}"]`).fadeOut();
            $("body").css("overflow", "");
        });

        // set 'esc' to close
        $(document).keydown(function (event) {
            if (event.keyCode === 27) {
                $(`[data-popup="item-${index}"]`).fadeOut();
                $("body").css("overflow", "");
            }
        });
        
    });
});