$(document).ready(function () {
    $('.w-tabs').find('[data-href]').each(function () {
        var dataHref = $(this).attr('data-href');
        $(this).click(function () {
            $(this).parentsUntil(".w-tabs").siblings().children().eq(dataHref - 1).click();
        });
    });
}); 