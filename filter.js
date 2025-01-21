// v1.1

// v1.1

var Webflow = Webflow || [];
Webflow.push(function () {
    $('[filter_no-result]').hide();

    // Add 'All' button
    let buttonAllText = $('[filter-button-all]').attr('filter-button-all') || 'All';
    let buttonClone = $('[filter-button]').first().closest('[role="listitem"]').clone();
    buttonClone.find('*').text(buttonAllText)
        .end()
        .find('[filter-button]')
        .addClass('is-active')
        .attr('filter-button', 'All')
        .prependTo($('[filter-button]').first().closest('[role="list"]'));

    // Filter logic
    $('[filter-button]').click(function () {
        const selectedText = $(this).attr('filter-button');
        let isMatchFound = false;

        // Toggle active state
        $('[filter-button]').removeClass('is-active');
        $(this).addClass('is-active');

        const filterItems = $('[filter_item-list]');
        const noResult = $('[filter_no-result]');

        if (selectedText === 'All') {
            filterItems.closest('[role="listitem"]').show();
            noResult.hide();
        } else {
            filterItems.each(function () {
                const itemText = $(this).text();
                const listItem = $(this).closest('[role="listitem"]');
                const isVisible = itemText.includes(selectedText);
                listItem.toggle(isVisible);
                isMatchFound = isMatchFound || isVisible;
            });

            noResult.toggle(!isMatchFound);
        }
    });
});