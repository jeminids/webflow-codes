$(function () {
    const copyButton = $("[share='copy']"), shareButton = $("[share='button']"), shareOption = $("[share='option']"), copyText = $("[share='copy-text']");

    function setShareLinks(url) {
        $("[share='facebook']").attr('href', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        $("[share='x']").attr('href', `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);
        $("[share='linkedin']").attr('href', `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`);
    }

    copyButton.click(() => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            const originalText = copyText.text();
            copyText.text('Copied');
            setTimeout(() => copyText.text(originalText), 1000);
        }).catch(console.error);
    });

    shareButton.click(() => {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({ url }).then(() => console.log('Successful share')).catch(console.log);
        } else {
            setShareLinks(url);
            shareOption.toggle();
        }
    });
});