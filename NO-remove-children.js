$(`[remove-children]`).each(function () {
    var removeCount = parseInt($(this).attr('remove-children'), 10);
    $(this).children().slice(0, removeCount).remove();
});