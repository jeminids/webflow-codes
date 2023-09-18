$(document).ready(function () {
    // Iterate through elements with popup-open attribute
    $('[popup-open]').each(function () {
        const index = $(this).attr('popup-open');

        // Open popup
        $(this).click(function () {
            $(`[popup-item="${index}"]`).fadeIn();
            $("body").css("overflow", "hidden");
        });

        // Close popup
        $(`[popup-close="${index}"]`).click(function () {
            $(`[popup-item="${index}"]`).fadeOut();
            $("body").css("overflow", "");
        });

        // Set 'esc' to close
        $(document).keydown(function (event) {
            if (event.keyCode === 27) {
                $(`[popup-item="${index}"]`).fadeOut();
                $("body").css("overflow", "");
            }
        });
    });
});