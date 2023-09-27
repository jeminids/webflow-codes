var source_list = $('[data-client="source"]');
var target_list = $('[data-client="target"]');

source_list.children().each(function (index) {
    var source_logo = $(this).find('img').attr('src');
    target_list.children().eq(index).find('img').attr('src', source_logo);
});

var source_index = target_list.children().length;
var target_index = 0;

setInterval(function () {
    var source_logo = source_list.children().eq(source_index).find('img').attr('src');
    target_list.children().eq(target_index).find('img').fadeOut(500, function () {
    $(this).attr('src', source_logo).fadeIn(500);
    });

    source_index++;
    target_index++;

    // Reset target_index to 0 when it reaches the maximum
    if (target_index >= target_list.children().length) {
    target_index = 0;
    }

    // Reset source_index to 0 when it reaches the maximum
    if (source_index >= source_list.children().length) {
    source_index = 0;
    }

    var sumber = source_list.children().length;


}, $('[data-time]').data("time"));