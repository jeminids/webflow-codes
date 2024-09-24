$(document).ready(function () {
    $('[accordion="item"]').each(function () {
        var speed = $(this).attr('accordion-speed') || 300;     
        $(this).find('[accordion="content"]').slideUp();    
        $(this).find('[accordion="trigger"]').click(function() {
            var $content = $(this).siblings('[accordion="content"]');
            $('[accordion="content"]').not($content).slideUp(speed);
            $content.stop(true, true).slideToggle(speed);
        });
    });    
});