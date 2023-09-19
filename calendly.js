$(document).ready(function () {
// Hide the element with [calendly="link"]
$(`[calendly="link"]`).hide();

// Watch for changes in user input
$('input').on('input', function () {
    var calendly_name = $(`[calendly="name"]`).val();
    var calendly_email = $(`[calendly="email"]`).val();
    var calendly_link = $(`[calendly="link"]`).text();

    // Concatenate Calendly link
    var calendly_link_full = calendly_link + "?name=" + encodeURIComponent(calendly_name) + "&email=" + calendly_email;

    
    $('[calendly="form"]').find('input[type="submit"]').click(function () {
    function isFormSubmitted() {
        return $('[calendly="form"]').css('display') === 'block';
    }

    // redirect to the Calendly link
    var intervalId = setInterval(function () {
        if (isFormSubmitted()) {
        clearInterval(intervalId); // Stop checking
        window.location.href = calendly_link_full;
        }
    }, 3000);
    });
});
});