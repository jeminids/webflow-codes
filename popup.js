<script>
$(document).ready(function() {
// Iterate through elements with data attributes
$('[data-popup^="open-"]').each(function() {
    const index = $(this).attr('data-popup').replace('open-', '');
    // Open popup
    $(this).click(function() {
    $(`[data-popup="popup-${index}"]`).fadeIn();
    });
    // Close popup
    $(`[data-popup="close-${index}"]`).click(function() {
    $(`[data-popup="item-${index}"]`).fadeOut();
    });
});
});
</script>
