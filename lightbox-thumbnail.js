$(document).ready(function () {
    var anchorElement = $('a[aria-label="open lightbox"]');
    var jsonData = JSON.parse(anchorElement.find('script[type="application/json"]').text());

    if (jsonData && jsonData.items && jsonData.items[0]) {
        var thumbnailUrl = jsonData.items[0].thumbnailUrl;
        var targetImage = anchorElement.find('[data-lightbox="image"]').length ? '[data-lightbox="image"]' : 'img:first';
        anchorElement.find(targetImage).attr('src', thumbnailUrl);
    } else {
        console.error('JSON data or thumbnail URL not found.');
    }
});