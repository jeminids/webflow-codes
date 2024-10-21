var promoKey = 'promoDismissed';
var promoDuration = parseInt($('[promo]').attr('promo')) || 30;
var currentTime = Date.now();
var dismissTime = localStorage.getItem(promoKey);

if (!dismissTime || currentTime > dismissTime) {
    $('[promo]').removeClass('is-hidden');
}

$('[promo-close]').on('click', function () {
    var nextShowTime = currentTime + promoDuration * 24 * 60 * 60 * 1000;
    localStorage.setItem(promoKey, nextShowTime);
    $('[promo]').addClass('is-hidden');
});

// reset
$('[promo-reset]').on('click', function () {
    localStorage.removeItem(promoKey);
});


