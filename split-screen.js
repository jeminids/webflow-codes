// v1.2
$(window).on('scroll', function() {
    var $splitScreen = $('[split-screen]');
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    
    var scrollEnd = parseFloat($splitScreen.attr('split-screen')) || 10;

    if (!isNaN(scrollEnd) && scrollPercent >= scrollEnd) {
        $splitScreen.css('clip-path', 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 100%, 0% 100%)');
    } else if (!isNaN(scrollEnd)) {
        var progress = scrollPercent / scrollEnd;

        var startClipPath = [ 
            [0, 0], [100, 0], [100, 50], [0, 50],
            [0, 50], [100, 50], [100, 100], [0, 100]
        ];

        var endClipPath = [ 
            [0, 0], [100, 0], [100, 0], [0, 0],
            [0, 100], [100, 100], [100, 100], [0, 100]
        ];

        // Calculate current clip-path points
        var currentClipPath = startClipPath.map(function(point, index) {
            return [
                Math.round(point[0] + (endClipPath[index][0] - point[0]) * progress),
                Math.round(point[1] + (endClipPath[index][1] - point[1]) * progress)
            ];
        });

        var clipPathValue = `polygon(${currentClipPath.map(point => point.join('% ') + '%').join(', ')})`;

        $splitScreen.css('clip-path', clipPathValue);
    }
});