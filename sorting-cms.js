var cms_list = $('[role="list"]');

cms_list.each(function () {
    var cms_item = $(this);
    var items = cms_item.find('[data-sort]');

    items.sort(function (a, b) {
        var aSort = parseInt($(a).attr('data-sort'));
        var bSort = parseInt($(b).attr('data-sort'));

        if (!isNaN(aSort) && !isNaN(bSort)) {
            return aSort - bSort;
        } else if (isNaN(aSort) && !isNaN(bSort)) {
            return 1;
        } else if (!isNaN(aSort) && isNaN(bSort)) {
            return -1;
        } else {
            return 0;
        }
    });

    cms_item.append(items);
});