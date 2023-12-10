$(document).ready(function () {
    var loadCount = $('[data-load="list"]').attr('load-count');

    // Initially hide all children of [data-load="list"] except for the loadCount
    $('[data-load="list"]').children().hide();
    $('[data-load="list"]').children().slice(0, loadCount).show();

    // When [data-load="button"] is clicked, show the next batch
    $('[data-load="button"]').click(function () {
        var hiddenChildren = $('[data-load="list"]').children(':hidden');
        var childrenToShow = hiddenChildren.slice(0, loadCount);
        childrenToShow.show();

        // If there are no more hidden children, hide the "load more" button
        if (hiddenChildren.length <= loadCount) {
            $(this).hide();
        }
    });
});