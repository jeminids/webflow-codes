$(document).ready(function () {
    // default state
    $('.w-radio').removeClass('is-active');
    $('.w-checkbox').removeClass('is-active');

    // custom radio selected state
    $('.w-radio').on('click', function () {
        if ($(this).children().eq(1).is(':checked')) {
            $(this).addClass('is-active');
            $(this).siblings().removeClass('is-active');
        }
    });

    // custom checkbox selected state
    $('.w-checkbox').on('click', function () {
        if ($(this).children().eq(0).is(':checked')) {
            $(this).toggleClass('is-active');
        }
    });

    // end
});