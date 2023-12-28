const copyButton = $("[share='copy']");
const shareButton = $("[share='button']");
const shareOption = $("[share='option']");
const copyText = $("[share='copy-text']");

copyButton.click(function () {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            console.log('Copying to clipboard was successful!');
            const originalText = copyText.text();
            copyText.text('Copied');

            setTimeout(() => {
                copyText.text(originalText);
            }, 1000);
        })
        .catch(err => {
            console.error('Could not copy: ', err);
        });
});

shareOption.hide();
shareButton.click(function () {
    if (shareOption.is(":visible")) {
        shareOption.hide();
    } else {
        const ogTitle = $('meta[property="og:title"]').attr('content');
        const currentUrl = window.location.href;

        if (navigator.share) {
            navigator.share({
                url: currentUrl
            })
                .then(() => console.log('Successful share'))
                .catch(error => console.log('Error sharing', error))
        } else {
            const encodedUrl = encodeURIComponent(currentUrl);
            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            const xUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
            const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`;

            $("[share='facebook']").attr('href', facebookUrl);
            $("[share='x']").attr('href', xUrl);
            $("[share='linkedin']").attr('href', linkedinUrl);

            shareOption.show();
        }
    }
});