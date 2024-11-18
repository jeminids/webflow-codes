// v1.2
$(document).ready(function () {
    function navbarScroll() {
        var navbarHeight = $('[navbar]').outerHeight();
        $('[navbar-height]').css('height', navbarHeight + 'px');
        let lastScrollTop = 0;

        $(window).on('scroll', function () {
            const scrollTop = $(this).scrollTop();

            if (scrollTop <= 32) {
                $('[navbar]').removeClass('is-hidden');
                $('[navbar]').removeClass('is-scroll-up');
            } else if (scrollTop > lastScrollTop) {
                $('[navbar]').addClass('is-hidden');
            } else {
                $('[navbar]').removeClass('is-hidden');
                $('[navbar]').addClass('is-scroll-up');
            }
            lastScrollTop = scrollTop;
        });
    }

    function runBasedOnNavbarValue() {
        var navbarValue = $('[navbar]').attr('navbar');
        var screenWidth = $(window).outerWidth();
        if (!navbarValue) {
            navbarScroll();
        } else if (navbarValue === "1" && screenWidth >= 991) {
            navbarScroll();
        } else if (navbarValue === "2" && screenWidth > 767) {
            navbarScroll();
        } else if (navbarValue === "3" && screenWidth <= 767) {
            navbarScroll();
        } else if (navbarValue.includes("1") && navbarValue.includes("3") && (screenWidth >= 991 || screenWidth <= 767)) {
            navbarScroll();
        } else if (navbarValue.includes("2") && navbarValue.includes("3") && screenWidth <= 991) {
            navbarScroll();
        }
    }

    runBasedOnNavbarValue();
});