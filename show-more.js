$(document).ready(function () {
    var loadCount = parseInt($('[show-more-list]').attr('show-more-list')) || 5;

    $('[show-more-list]').children().hide();
    $('[show-more-list]').children().slice(0, loadCount).show();

    $('[show-more-button]').click(function () {
        var hiddenChildren = $('[show-more-list]').children(':hidden');
        var childrenToShow = hiddenChildren.slice(0, loadCount);
        childrenToShow.show();

        if (hiddenChildren.length <= loadCount) {
            $(this).hide();
        }
    });
});