$(function () {
    const currentUrl = window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);

    // Hide share options initially
    $('[share-option]').addClass('is-hidden');

    // Handle share trigger
    $('[share]').on('click', function () {
        if (navigator.share) {
            navigator.share({ url: currentUrl })
                .then(() => console.log('Successfully shared'))
                .catch(error => console.log('Error sharing:', error));
        } else {
            console.log('Web Share API not supported in this browser.');
            $('[share-option]').removeClass('is-hidden');
        }
    });

    // Copy URL to clipboard
    $('[share-copy]').on('click', function () {
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                console.log('Copying to clipboard was successful!');
                const $copyText = $('[share-copy-text]');
                const originalText = $copyText.text();
                $copyText.text('Copied');
                setTimeout(() => $copyText.text(originalText), 1000);
            })
            .catch(err => console.error('Could not copy: ', err));
    });

    // Set social share URLs
    $('[share-facebook]').attr('href', `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`);
    $('[share-twitter]').attr('href', `https://twitter.com/intent/tweet?url=${encodedUrl}`);
    $('[share-linkedin]').attr('href', `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`);
});