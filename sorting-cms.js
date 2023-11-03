function sorting_prodcut() {
var containers = $('[data-sort="list"]');

containers.each(function () {
    var container = $(this);
    var items = container.find('[data-sort]');

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

    container.empty().append(items);
});
}

sorting_prodcut();